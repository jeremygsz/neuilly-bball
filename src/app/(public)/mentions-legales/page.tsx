import { Metadata } from "next";
import s from "../legal.module.scss";

export const metadata: Metadata = {
    title: "Mentions Légales",
    description: "Mentions légales du site Neuilly Basketball Association.",
};

export default function MentionsLegalesPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <h1 className={s.heroTitle}>
                        Mentions <span className={s.accent}>Légales</span>
                    </h1>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    <div className={s.richText}>
                        <span className={s.lastUpdate}>Dernière mise à jour : 9 juin 2026</span>

                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le présent site est édité par :<br />
                            <strong>Neuilly Basketball Association</strong><br />
                            Association sportive régie par la loi du 1er juillet 1901<br />
                            Président : Noam Revah<br />
                            Email : contact@neuillybasketball.com<br />
                            Directeur de la publication : Noam Revah, en qualité de Président de l’association.
                        </p>

                        <h2>2. Hébergeur du site</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong>OVH SAS</strong><br />
                            Société par actions simplifiée au capital de 50 000 000 €<br />
                            RCS Lille Métropole : 424 761 419 00045<br />
                            Siège social : 2 rue Kellermann, 59100 Roubaix, France<br />
                            OVH indique également être l’hébergeur de ses services à cette adresse.
                        </p>

                        <h2>3. Objet du site</h2>
                        <p>
                            Le site neuillybasketball.com a pour objet de présenter les activités de Neuilly Basketball Association, notamment :
                        </p>
                        <ul>
                            <li>Les informations relatives au club ;</li>
                            <li>Les horaires d’entraînement ;</li>
                            <li>Les inscriptions et renouvellements ;</li>
                            <li>Les stages, événements et actualités ;</li>
                            <li>Les informations destinées aux adhérents, parents et partenaires.</li>
                        </ul>

                        <h2>4. Propriété intellectuelle</h2>
                        <p>
                            L’ensemble du contenu présent sur le site, notamment les textes, images, photographies, logos, graphismes, vidéos, documents, éléments visuels et structure générale du site, est protégé par le droit d’auteur et le droit de la propriété intellectuelle.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans autorisation préalable écrite de Neuilly Basketball Association, est strictement interdite.
                        </p>
                        <p>
                            Toute utilisation non autorisée du site ou de l’un quelconque de ses contenus pourra engager la responsabilité de son auteur.
                        </p>

                        <h2>5. Responsabilité</h2>
                        <p>
                            Neuilly Basketball Association s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le site.
                        </p>
                        <p>
                            Toutefois, l’association ne peut garantir que les informations soient complètes, exactes ou constamment à jour. Elles sont fournies à titre indicatif et peuvent être modifiées à tout moment.
                        </p>
                        <p>
                            L’utilisateur est seul responsable de l’utilisation qu’il fait des informations disponibles sur le site.
                        </p>
                        <p>
                            Neuilly Basketball Association ne saurait être tenue responsable :
                        </p>
                        <ul>
                            <li>D’une erreur ou omission dans le contenu publié ;</li>
                            <li>D’une interruption temporaire du site ;</li>
                            <li>D’un dysfonctionnement technique ;</li>
                            <li>D’un dommage direct ou indirect résultant de l’utilisation du site.</li>
                        </ul>

                        <h2>6. Liens hypertextes</h2>
                        <p>
                            Le site peut contenir des liens vers des sites tiers.
                        </p>
                        <p>
                            Neuilly Basketball Association n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur fonctionnement ou leur politique de confidentialité.
                        </p>
                        <p>
                            La présence d’un lien vers un site tiers ne constitue pas une validation ou une recommandation de son contenu.
                        </p>

                        <h2>7. Données personnelles</h2>
                        <p>
                            Dans le cadre de l’utilisation du site, Neuilly Basketball Association peut être amenée à collecter certaines données personnelles, notamment via les formulaires de contact, d’inscription ou de demande d’information.
                        </p>
                        <p>
                            Ces données sont traitées conformément au Règlement Général sur la Protection des Données, dit RGPD, et à la loi Informatique et Libertés.
                        </p>
                        <p>
                            Pour plus d’informations, l’utilisateur est invité à consulter la Politique de confidentialité RGPD disponible sur le site.
                        </p>

                        <h2>8. Cookies</h2>
                        <p>
                            Le site peut utiliser des cookies nécessaires à son bon fonctionnement, ainsi que des cookies de mesure d’audience ou d’amélioration de l’expérience utilisateur.
                        </p>
                        <p>
                            L’utilisateur peut accepter, refuser ou paramétrer les cookies lorsque cela est requis par la réglementation applicable.
                        </p>
                        <p>
                            Pour plus d’informations, l’utilisateur est invité à consulter la Politique de cookies du site.
                        </p>

                        <h2>9. Contact</h2>
                        <p>
                            Pour toute question concernant le site, son contenu ou les présentes mentions légales, vous pouvez contacter :<br />
                            <strong>Neuilly Basketball Association</strong><br />
                            Email : contact@neuillybasketball.com
                        </p>

                        <h2>10. Droit applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français.
                        </p>
                        <p>
                            En cas de litige, et à défaut de résolution amiable, les juridictions françaises compétentes seront seules compétentes.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
