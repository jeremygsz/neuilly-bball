import { Metadata } from "next";
import s from "../legal.module.scss";

export const metadata: Metadata = {
    title: "RGPD",
    description: "Politique de protection des données (RGPD) de Neuilly Basketball Association.",
};

export default function RgpdPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <h1 className={s.heroTitle}>
                        <span className={s.accent}>RGPD</span>
                    </h1>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    <div className={s.richText}>
                        <span className={s.lastUpdate}>Dernière mise à jour : 9 juin 2026</span>

                        <h2>1. Responsable du traitement</h2>
                        <p>
                            Le site internet Neuilly Basketball Association est édité par :<br />
                            <strong>Neuilly Basketball Association</strong><br />
                            Association sportive régie par la loi du 1er juillet 1901.<br />
                            Président : N. Revah<br />
                            Email : contact@neuillybasketball.com
                        </p>

                        <h2>2. Objet de la présente politique</h2>
                        <p>
                            La présente politique a pour objet d'informer les utilisateurs du site sur la collecte et le traitement de leurs données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                        </p>

                        <h2>3. Données collectées</h2>
                        <p>Selon les services utilisés sur le site, les données suivantes peuvent être collectées :</p>
                        <ul>
                            <li><strong>Données d'identification :</strong> Nom, prénom, date de naissance, sexe, adresse postale, email, téléphone.</li>
                            <li><strong>Données relatives aux inscriptions :</strong> Catégorie sportive, informations de licence, historique des inscriptions.</li>
                            <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages consultées, date et heure de connexion.</li>
                            <li><strong>Données fournies volontairement :</strong> Informations via le formulaire de contact, candidatures bénévoles, inscriptions newsletters.</li>
                        </ul>

                        <h2>4. Finalités des traitements</h2>
                        <p>Les données collectées sont utilisées pour :</p>
                        <ul>
                            <li><strong>Gestion des adhérents :</strong> Inscriptions, licences, communication avec les familles, organisation des activités.</li>
                            <li><strong>Gestion du site internet :</strong> Réponse aux demandes de contact, sécurisation du site, statistiques.</li>
                            <li><strong>Communication :</strong> Envoi d'informations relatives au club, newsletters (avec consentement).</li>
                        </ul>
                        <p>Les données ne sont jamais vendues ou cédées à des tiers à des fins commerciales.</p>

                        <h2>5. Bases légales du traitement</h2>
                        <p>Les traitements reposent sur :</p>
                        <ul>
                            <li>L’exécution d'un contrat ou de mesures précontractuelles ;</li>
                            <li>Le respect d'obligations légales et réglementaires ;</li>
                            <li>L’intérêt légitime de l'association ;</li>
                            <li>Le consentement de la personne concernée.</li>
                        </ul>

                        <h2>6. Destinataires des données</h2>
                        <p>Les données sont accessibles uniquement :</p>
                        <ul>
                            <li>Aux membres habilités du bureau de l'association ;</li>
                            <li>Aux entraîneurs et responsables sportifs dans la limite de leurs fonctions ;</li>
                            <li>Aux prestataires techniques intervenant pour le fonctionnement du site ;</li>
                            <li>Aux organismes sportifs compétents (fédérations, assurances).</li>
                        </ul>

                        <h2>7. Durée de conservation</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Type de données</th>
                                    <th>Durée</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Formulaires de contact</td>
                                    <td>3 ans</td>
                                </tr>
                                <tr>
                                    <td>Données d'adhésion</td>
                                    <td>5 ans après la fin de l'adhésion</td>
                                </tr>
                                <tr>
                                    <td>Pièces comptables</td>
                                    <td>10 ans</td>
                                </tr>
                                <tr>
                                    <td>Cookies analytiques</td>
                                    <td>13 mois maximum</td>
                                </tr>
                                <tr>
                                    <td>Logs techniques</td>
                                    <td>12 mois</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>8. Sécurité des données</h2>
                        <p>
                            Neuilly Basketball Association met en œuvre toutes les mesures techniques et organisationnelles raisonnables afin de garantir la confidentialité et la sécurité des données.
                        </p>

                        <h2>9. Droits des personnes concernées</h2>
                        <p>Conformément au RGPD, chaque utilisateur dispose des droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité.</p>
                        <p>Pour exercer ces droits : <strong>contact@neuillybasketball.com</strong></p>

                        <h2>10. Réclamation auprès de la CNIL</h2>
                        <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL.</p>

                        <h2>11. Cookies</h2>
                        <p>
                            Le site peut utiliser des cookies pour assurer son bon fonctionnement, mesurer l'audience et améliorer l'expérience utilisateur. Les cookies non strictement nécessaires nécessitent votre consentement.
                        </p>

                        <h2>12. Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong>OVH SAS</strong><br />
                            Siège social : 2 rue Kellermann, 59100 Roubaix, France
                        </p>

                        <h2>13. Modification de la politique</h2>
                        <p>
                            Neuilly Basketball Association se réserve le droit de modifier la présente politique à tout moment. La version publiée sur le site est la seule version opposable.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
