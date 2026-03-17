import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding database...");

    // ─── Admin user ───────────────────────────────────────────────────────────
    const hashedPassword = await bcrypt.hash("Admin2026!", 12);

    const admin = await prisma.user.upsert({
        where: { email: "admin@neuillybasketball.fr" },
        update: {},
        create: {
            firstname: "Admin",
            lastname:  "NBA",
            email:     "admin@neuillybasketball.fr",
            password:  hashedPassword,
            role:      "SUPER_ADMIN",
        },
    });
    console.log("✅ Admin créé:", admin.email);

    // ─── Teams ────────────────────────────────────────────────────────────────
    const teams = await Promise.all([
        prisma.team.upsert({
            where:  { id: 1 },
            update: {},
            create: { label: "Équipe Première" },
        }),
        prisma.team.upsert({
            where:  { id: 2 },
            update: {},
            create: { label: "Équipe Réserve" },
        }),
        prisma.team.upsert({
            where:  { id: 3 },
            update: {},
            create: { label: "U18" },
        }),
        prisma.team.upsert({
            where:  { id: 4 },
            update: {},
            create: { label: "U15" },
        }),
    ]);
    console.log("✅ Équipes créées:", teams.map((t) => t.label).join(", "));

    // ─── Players ──────────────────────────────────────────────────────────────
    await prisma.player.createMany({
        skipDuplicates: true,
        data: [
            { firstname: "Thomas", lastname: "Leblanc",  position: "Meneur",     number: 1,  teamId: 1 },
            { firstname: "Lucas",  lastname: "Moreau",   position: "Arrière",    number: 3,  teamId: 1 },
            { firstname: "Julien", lastname: "Bernard",  position: "Ailier",     number: 5,  teamId: 1 },
            { firstname: "Marc",   lastname: "Dupont",   position: "Ailier fort",number: 7,  teamId: 1 },
            { firstname: "Pierre", lastname: "Martin",   position: "Pivot",      number: 9,  teamId: 1 },
            { firstname: "Kevin",  lastname: "Simon",    position: "Meneur",     number: 11, teamId: 1 },
            { firstname: "David",  lastname: "Laurent",  position: "Arrière",    number: 13, teamId: 1 },
            { firstname: "Antoine",lastname: "Petit",    position: "Ailier",     number: 15, teamId: 1 },
            { firstname: "Nicolas",lastname: "Robert",   position: "Pivot",      number: 17, teamId: 1 },
            { firstname: "Alexis", lastname: "Garcia",   position: "Ailier fort",number: 21, teamId: 1 },
            { firstname: "Hugo",   lastname: "Roux",     position: "Meneur",     number: 4,  teamId: 2 },
            { firstname: "Maxime", lastname: "Leroy",    position: "Arrière",    number: 6,  teamId: 2 },
            { firstname: "Baptiste",lastname:"Girard",   position: "Pivot",      number: 8,  teamId: 2 },
        ],
    });
    console.log("✅ Joueurs créés");

    // ─── Trainings ────────────────────────────────────────────────────────────
    await prisma.training.createMany({
        skipDuplicates: true,
        data: [
            { teamId: 1, dayOfWeek: 1, startTime: "19:30", endTime: "21:30",
                location: "Gymnase Jean Bouin" },
            { teamId: 1, dayOfWeek: 3, startTime: "19:30", endTime: "21:30",
                location: "Gymnase Jean Bouin" },
            { teamId: 2, dayOfWeek: 1, startTime: "18:00", endTime: "20:00",
                location: "Gymnase Jean Bouin" },
            { teamId: 2, dayOfWeek: 4, startTime: "18:00", endTime: "20:00",
                location: "Gymnase Jean Bouin" },
            { teamId: 3, dayOfWeek: 2, startTime: "17:30", endTime: "19:30",
                location: "Gymnase André Maurois" },
            { teamId: 3, dayOfWeek: 5, startTime: "17:30", endTime: "19:30",
                location: "Gymnase André Maurois" },
            { teamId: 4, dayOfWeek: 3, startTime: "16:30", endTime: "18:00",
                location: "Gymnase André Maurois" },
            { teamId: 4, dayOfWeek: 6, startTime: "10:00", endTime: "12:00",
                location: "Gymnase André Maurois" },
        ],
    });
    console.log("✅ Entraînements créés");

    // ─── Carousel ─────────────────────────────────────────────────────────────
    await prisma.carousel.createMany({
        skipDuplicates: true,
        data: [
            {
                title:    "Bienvenue au Neuilly Basketball Club",
                picture:  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600",
                isOnline: true,
            },
            {
                title:    "Une saison exceptionnelle vous attend",
                picture:  "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1600",
                isOnline: true,
            },
            {
                title:    "Rejoignez la famille Neuilly Basketball",
                picture:  "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1600",
                isOnline: true,
            },
        ],
    });
    console.log("✅ Carousel créé");

    // ─── Posts ────────────────────────────────────────────────────────────────
    await prisma.post.createMany({
        skipDuplicates: true,
        data: [
            {
                title:    "Victoire éclatante de l'équipe première !",
                slug:     "victoire-eclatante-equipe-premiere",
                excerpt:  "Nos joueurs ont réalisé une performance remarquable lors du derby...",
                content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                picture:  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
                isOnline: true,
            },
            {
                title:    "Inscriptions ouvertes pour la saison 2025-2026",
                slug:     "inscriptions-saison-2025-2026",
                excerpt:  "Les inscriptions pour la nouvelle saison sont désormais ouvertes...",
                content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                picture:  "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800",
                isOnline: true,
            },
            {
                title:    "Stage de basket pendant les vacances",
                slug:     "stage-basket-vacances",
                excerpt:  "Un stage intensif organisé pour les jeunes joueurs cet été...",
                content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                picture:  "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=800",
                isOnline: true,
            },
        ],
    });
    console.log("✅ Articles créés");
    console.log("\n🎉 Seeding terminé avec succès !");
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
