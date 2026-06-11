"use client";

import { motion } from "framer-motion";
import s from "./WelcomeSection.module.scss";

export function WelcomeSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <motion.div
                    className={s.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-display">Bienvenue à Neuilly Basketball Association</h2>
                    
                    <p className={s.lead}>Plus qu’un club, une famille autour d’une passion commune : le basketball.</p>

                    <div className={s.textBody}>
                        <p><i>Créé avec l’envie de transmettre les valeurs du sport dans un environnement sain, bienveillant et ambitieux, Neuilly Basketball Association est un club où chacun trouve sa place, quel que soit son âge, son niveau ou ses objectifs.</i></p>

                        <p><i>Notre conviction est simple : on progresse mieux lorsque l’on prend du plaisir. C’est pourquoi nous mettons tout en œuvre pour que chaque entraînement soit un moment de partage, d’apprentissage et de convivialité. Ici, la bonne humeur, le respect et l’esprit d’équipe sont au cœur de notre projet.</i></p>

                        <p><i>Nous avons fait le choix d’investir dans du matériel de qualité et dans un encadrement compétent afin d’offrir à nos adhérents les meilleures conditions possibles pour pratiquer le basketball. Notre objectif est de permettre à chacun de se développer à son rythme, de gagner en confiance et de vivre pleinement sa passion.</i></p>

                        <p><i>Pour autant, plaisir et performance ne sont pas incompatibles. Nous croyons qu’un joueur épanoui est un joueur qui progresse. C’est pourquoi nous accompagnons nos licenciés avec exigence, bienveillance et ambition, afin de les aider à révéler leur potentiel, sur le terrain comme en dehors.</i></p>

                        <p><i>Au-delà du sport, nous souhaitons construire un club à taille humaine, où les adhérents, les familles, les bénévoles et les entraîneurs partagent des valeurs communes et contribuent ensemble à une aventure collective.</i></p>

                        <p><i>Notre ambition est également de faire de Neuilly Basketball Association un club à l’image de Neuilly-sur-Seine : une ville dynamique, exigeante, élégante et tournée vers l’avenir. Nous sommes fiers de participer au développement de la pratique sportive locale et de contribuer, à notre échelle, à la transmission des valeurs positives du sport auprès des jeunes et des adultes.</i></p>

                        <p><i>Que vous soyez débutant, joueur confirmé, enfant, adolescent ou adulte, nous serons heureux de vous accueillir et de partager avec vous notre passion du basketball.</i></p>
                        
                        <p className={s.closing}>
                            <i>Bienvenue chez Neuilly Basketball Association.<br />Bienvenue dans la famille du basketball. </i> 💙
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
