import { Metadata } from "next";
import s from "../legal.module.scss";

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité de Neuilly Basketball Association.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <h1 className={s.heroTitle}>
                        Politique de <span className={s.accent}>Confidentialité</span>
                    </h1>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    <div className={s.richText}>
                        <span className={s.lastUpdate}>Dernière mise à jour : 9 juin 2026</span>

                        <h2>1. Préambule</h2>
                        <p>
                            La présente Politique de confidentialité a pour objectif d’informer les utilisateurs du site neuillybasketball.com sur la manière dont leurs données personnelles sont collectées, utilisées, protégées et conservées par Neuilly Basketball Association.
                        </p>
                        <p>
                            Neuilly Basketball Association s'engage à traiter les données personnelles dans le respect du Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et de la législation française applicable.
                        </p>

                        <h2>2. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données personnelles est :<br />
                            <strong>Neuilly Basketball Association</strong><br />
                            Président : N Revah<br />
                            Email : contact@neuillybasketball.com<br />
                            Pour toute question relative à la protection des données personnelles, vous pouvez contacter l'association à l'adresse ci-dessus.
                        </p>

                        <h2>3. Données personnelles collectées</h2>
                        <p>Selon les services utilisés sur le site, nous pouvons être amenés à collecter les données suivantes :</p>

                        <h3>Informations d'identité</h3>
                        <ul>
                            <li>Nom</li>
                            <li>Prénom</li>
                            <li>Date de naissance</li>
                            <li>Sexe</li>
                        </ul>

                        <h3>Coordonnées</h3>
                        <ul>
                            <li>Adresse postale</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone</li>
                        </ul>

                        <h3>Informations relatives aux adhésions</h3>
                        <ul>
                            <li>Catégorie sportive</li>
                            <li>Informations d'inscription</li>
                            <li>Historique des adhésions</li>
                            <li>Participation aux stages, événements et compétitions</li>
                        </ul>

                        <h3>Informations relatives aux mineurs</h3>
                        <p>Lorsque l'adhérent est mineur, les informations concernant les représentants légaux peuvent être collectées :</p>
                        <ul>
                            <li>Nom et prénom des parents ou responsables légaux</li>
                            <li>Coordonnées téléphoniques</li>
                            <li>Adresse électronique</li>
                        </ul>

                        <h3>Données de navigation</h3>
                        <p>Lors de votre visite sur le site :</p>
                        <ul>
                            <li>Adresse IP</li>
                            <li>Type de navigateur</li>
                            <li>Système d'exploitation</li>
                            <li>Pages consultées</li>
                            <li>Date et heure de connexion</li>
                        </ul>

                        <h3>Informations communiquées volontairement</h3>
                        <ul>
                            <li>Messages envoyés via les formulaires de contact</li>
                            <li>Demandes d'information</li>
                            <li>Candidatures bénévoles</li>
                            <li>Inscriptions aux newsletters</li>
                        </ul>

                        <h2>4. Finalités du traitement</h2>
                        <p>Les données collectées sont utilisées pour :</p>

                        <h3>Gestion administrative du club</h3>
                        <ul>
                            <li>Traitement des demandes d'inscription</li>
                            <li>Gestion des adhésions</li>
                            <li>Suivi des licences sportives</li>
                            <li>Gestion des stages et événements</li>
                        </ul>

                        <h3>Communication avec les adhérents</h3>
                        <ul>
                            <li>Réponses aux demandes envoyées via le site</li>
                            <li>Informations relatives à la vie du club</li>
                            <li>Informations sur les entraînements, stages et compétitions</li>
                            <li>Envoi de newsletters lorsque l'utilisateur y a consenti</li>
                        </ul>

                        <h3>Gestion du site internet</h3>
                        <ul>
                            <li>Amélioration du fonctionnement du site</li>
                            <li>Analyse statistique de fréquentation</li>
                            <li>Sécurisation du site</li>
                            <li>Prévention des utilisations frauduleuses</li>
                        </ul>

                        <h2>5. Bases légales des traitements</h2>
                        <p>Les traitements réalisés reposent sur :</p>
                        <ul>
                            <li><strong>L'exécution d'un contrat :</strong> Pour les adhésions, les inscriptions et la participation aux activités du club.</li>
                            <li><strong>Le respect d'obligations légales :</strong> Pour les obligations comptables, administratives ou imposées par les organismes sportifs.</li>
                            <li><strong>L'intérêt légitime de l'association :</strong> Pour la gestion interne du club, l'organisation des activités et la sécurité du site internet.</li>
                            <li><strong>Le consentement :</strong> Pour l'envoi de newsletters, certains cookies et toute utilisation nécessitant un consentement préalable.</li>
                        </ul>

                        <h2>6. Destinataires des données</h2>
                        <p>Les données personnelles sont accessibles uniquement :</p>
                        <ul>
                            <li>aux membres habilités du bureau de l'association ;</li>
                            <li>aux entraîneurs et responsables sportifs dans le cadre de leurs missions ;</li>
                            <li>aux prestataires techniques intervenant dans le fonctionnement du site ;</li>
                            <li>aux organismes sportifs, fédérations, ligues ou assureurs lorsque cela est nécessaire à l'activité du club.</li>
                        </ul>
                        <p>Neuilly Basketball Association ne vend jamais les données personnelles à des tiers.</p>

                        <h2>7. Conservation des données</h2>
                        <p>Les données sont conservées uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Type de données</th>
                                    <th>Durée de conservation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Formulaires de contact</td>
                                    <td>3 ans</td>
                                </tr>
                                <tr>
                                    <td>Demandes d'information</td>
                                    <td>3 ans</td>
                                </tr>
                                <tr>
                                    <td>Adhérents et licenciés</td>
                                    <td>5 ans après la fin de l'adhésion</td>
                                </tr>
                                <tr>
                                    <td>Données comptables</td>
                                    <td>10 ans</td>
                                </tr>
                                <tr>
                                    <td>Cookies de mesure d'audience</td>
                                    <td>13 mois maximum</td>
                                </tr>
                                <tr>
                                    <td>Journaux techniques (logs)</td>
                                    <td>12 mois</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>8. Sécurité des données</h2>
                        <p>
                            Neuilly Basketball Association met en œuvre des mesures techniques et organisationnelles adaptées afin de garantir la confidentialité, l'intégrité et la protection de vos données.
                        </p>

                        <h2>9. Droits des utilisateurs</h2>
                        <p>Conformément au RGPD, chaque utilisateur dispose des droits suivants :</p>
                        <ul>
                            <li><strong>Droit d'accès :</strong> Obtenir la confirmation que des données le concernant sont traitées et en obtenir une copie.</li>
                            <li><strong>Droit de rectification :</strong> Faire corriger des informations inexactes ou incomplètes.</li>
                            <li><strong>Droit à l'effacement :</strong> Demander la suppression de ses données lorsque cela est possible légalement.</li>
                            <li><strong>Droit à la limitation :</strong> Demander la suspension temporaire d'un traitement.</li>
                            <li><strong>Droit d'opposition :</strong> S'opposer à certains traitements fondés sur l'intérêt légitime.</li>
                            <li><strong>Droit à la portabilité :</strong> Recevoir les données fournies dans un format exploitable.</li>
                            <li><strong>Droit de retirer son consentement :</strong> À tout moment lorsque le traitement repose sur le consentement.</li>
                        </ul>

                        <h2>10. Exercice des droits</h2>
                        <p>
                            Toute demande relative aux données personnelles peut être adressée à :<br />
                            <strong>Neuilly Basketball Association</strong><br />
                            Email : contact@neuillybasketball.com
                        </p>

                        <h2>11. Réclamation auprès de la CNIL</h2>
                        <p>
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>.
                        </p>

                        <h2>12. Cookies</h2>
                        <p>
                            Le site utilise des cookies strictement nécessaires à son fonctionnement. Des cookies de mesure d'audience ou d'amélioration de l'expérience utilisateur peuvent également être utilisés avec votre consentement.
                        </p>

                        <h2>13. Photographies et droit à l'image</h2>
                        <p>
                            Dans le cadre des activités du club, des photographies et vidéos peuvent être réalisées. Une autorisation préalable est recueillie lors de l'adhésion. Toute demande de retrait d'une image peut être adressée à contact@neuillybasketball.com.
                        </p>

                        <h2>14. Modification de la politique</h2>
                        <p>
                            Neuilly Basketball Association se réserve le droit de modifier la présente Politique de confidentialité à tout moment. La version publiée sur le site est la seule version opposable.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
