// lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email:    { label: "Email",        type: "email"    },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email et mot de passe requis");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user) throw new Error("Identifiants incorrects");

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!isPasswordValid) throw new Error("Identifiants incorrects");

                return {
                    id:        String(user.id),
                    email:     user.email,
                    firstname: user.firstname,
                    lastname:  user.lastname,
                    role:      user.role,
                };
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id        = user.id;
                token.firstname = user.firstname;
                token.lastname  = user.lastname;
                token.role      = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id        = token.id        as string;
                session.user.firstname = token.firstname as string;
                session.user.lastname  = token.lastname  as string;
                session.user.role      = token.role      as string;
            }
            return session;
        },
    },

    pages: {
        signIn: "/login",
        error:  "/login",
    },

    session: {
        strategy: "jwt",
        maxAge:   24 * 60 * 60,
    },

    secret: process.env.NEXTAUTH_SECRET,
});
