import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY!,
    apiSecret: process.env.MAILJET_SECRET_KEY!,
});

interface SendMailOptions {
    to: string;
    toName: string;
    subject: string;
    htmlContent: string;
    textContent?: string;
}

export async function sendMail({
                                   to,
                                   toName,
                                   subject,
                                   htmlContent,
                                   textContent,
                               }: SendMailOptions): Promise<boolean> {
    try {
        await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: {
                        Email: process.env.MAILJET_FROM_EMAIL!,
                        Name: process.env.MAILJET_FROM_NAME!,
                    },
                    To: [{ Email: to, Name: toName }],
                    Subject: subject,
                    TextPart: textContent ?? subject,
                    HTMLPart: htmlContent,
                },
            ],
        });
        return true;
    } catch (error) {
        console.error("Mailjet error:", error);
        return false;
    }
}

// ─── Templates ───────────────────────────────────────────────────────────────

export function contactConfirmationTemplate(firstname: string): string {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9;">
      <div style="background: #1a1a2e; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
          🏀 Neuilly Basketball
        </h1>
      </div>
      <div style="padding: 40px 30px; background: #ffffff;">
        <h2 style="color: #1a1a2e;">Bonjour ${firstname},</h2>
        <p style="color: #555; line-height: 1.6;">
          Nous avons bien reçu votre message et nous vous en remercions.
          Notre équipe vous répondra dans les meilleurs délais.
        </p>
        <div style="background: #f0f4ff; border-left: 4px solid #1a1a2e; 
                    padding: 15px 20px; margin: 25px 0; border-radius: 4px;">
          <p style="margin: 0; color: #1a1a2e; font-weight: bold;">
            Neuilly Basketball Club
          </p>
          <p style="margin: 5px 0 0; color: #555; font-size: 14px;">
            Gymnase Jean Bouin — Neuilly-sur-Seine
          </p>
        </div>
        <p style="color: #555; line-height: 1.6;">
          À très bientôt sur les parquets !
        </p>
      </div>
      <div style="background: #1a1a2e; padding: 20px; text-align: center;">
        <p style="color: #888; font-size: 12px; margin: 0;">
          © ${new Date().getFullYear()} Neuilly Basketball — Tous droits réservés
        </p>
      </div>
    </div>
  `;
}

export function contactNotificationTemplate(data: {
    firstname: string;
    lastname: string;
    email: string;
    phone?: string | null;
    subject: string;
    message: string;
}): string {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a1a2e; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">
          Nouveau message de contact
        </h1>
      </div>
      <div style="padding: 30px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; background: #f5f5f5; 
                       font-weight: bold; width: 140px; color: #1a1a2e;">
              Nom
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${data.firstname} ${data.lastname}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; 
                       font-weight: bold; color: #1a1a2e;">
              Email
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px; background: #f5f5f5; 
                       font-weight: bold; color: #1a1a2e;">
              Téléphone
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${data.phone}
            </td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 10px; background: #f5f5f5; 
                       font-weight: bold; color: #1a1a2e;">
              Sujet
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${data.subject}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f5f5f5; 
                       font-weight: bold; color: #1a1a2e; vertical-align: top;">
              Message
            </td>
            <td style="padding: 10px; line-height: 1.6; color: #333;">
              ${data.message.replace(/\n/g, "<br>")}
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;
}
