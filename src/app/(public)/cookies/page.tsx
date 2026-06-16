import { Metadata } from "next";
import s from "../legal.module.scss";

export const metadata: Metadata = {
    title: "Gestion des Cookies",
    description: "Politique de gestion des cookies de Neuilly Basketball Association.",
};

export default function CookiesPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <h1 className={s.heroTitle}>
                        Gestion des <span className={s.accent}>Cookies</span>
                    </h1>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    <div className={s.richText}>
                        <span className={s.lastUpdate}>Dernière mise à jour : Juin 2026</span>

                        <p>
                            Le site Neuilly Basketball Association utilise des cookies afin d’améliorer votre expérience de navigation, mesurer l’audience du site et assurer son bon fonctionnement.
                        </p>

                        <h2>Qu’est-ce qu’un cookie ?</h2>
                        <p>
                            Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone ou tablette) lors de votre visite sur un site internet. Il permet notamment de reconnaître votre navigateur et de conserver certaines informations pendant une durée limitée.
                        </p>

                        <h2>Quels cookies utilisons-nous ?</h2>
                        
                        <h3>1. Cookies strictement nécessaires</h3>
                        <p>Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.</p>
                        <p>Ils permettent notamment :</p>
                        <ul>
                            <li>l’accès sécurisé au site ;</li>
                            <li>la mémorisation de vos préférences de navigation ;</li>
                            <li>le fonctionnement des formulaires de contact et d’inscription.</li>
                        </ul>

                        <h3>2. Cookies de mesure d’audience</h3>
                        <p>Avec votre consentement, nous pouvons utiliser des outils statistiques afin de mesurer :</p>
                        <ul>
                            <li>le nombre de visiteurs ;</li>
                            <li>les pages les plus consultées ;</li>
                            <li>la durée des visites ;</li>
                            <li>l’origine des visites.</li>
                        </ul>
                        <p>Ces données sont anonymisées et servent uniquement à améliorer le site.</p>

                        <h3>3. Cookies tiers</h3>
                        <p>Certaines fonctionnalités peuvent utiliser des services externes tels que :</p>
                        <ul>
                            <li>Google Maps ;</li>
                            <li>YouTube ;</li>
                            <li>Réseaux sociaux (Instagram, Facebook, LinkedIn).</li>
                        </ul>
                        <p>Ces services peuvent déposer leurs propres cookies conformément à leurs politiques de confidentialité.</p>

                        <h2>Gestion de vos préférences</h2>
                        <p>Lors de votre première visite, un bandeau vous permet :</p>
                        <ul>
                            <li>d’accepter tous les cookies ;</li>
                            <li>de refuser les cookies non essentiels ;</li>
                            <li>de personnaliser vos choix.</li>
                        </ul>
                        <p>Vous pouvez modifier vos préférences à tout moment depuis le lien “Gestion des cookies” disponible en bas de page.</p>

                        <h2>Durée de conservation</h2>
                        <p>Les cookies sont conservés pour une durée maximale de 13 mois, conformément à la réglementation en vigueur.</p>

                        <h2>Vos droits</h2>
                        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez notamment des droits suivants :</p>
                        <ul>
                            <li>droit d’accès ;</li>
                            <li>droit de rectification ;</li>
                            <li>droit d’effacement ;</li>
                            <li>droit d’opposition ;</li>
                            <li>droit à la limitation du traitement.</li>
                        </ul>
                        <p>
                            Pour toute question relative à vos données personnelles :<br />
                            📧 <strong>contact@neuillybasketball.com</strong>
                        </p>

                        <h2>Responsable du traitement</h2>
                        <p>
                            <strong>Neuilly Basketball Association</strong><br />
                            Neuilly-sur-Seine – France<br />
                            Email : contact@neuillybasketball.com
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
