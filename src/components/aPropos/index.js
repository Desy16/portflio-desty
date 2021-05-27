import React from 'react';
import Footer from '../footer';

const Apropos = () => {

    return (
        <div>
            <section className="section-apropos">
                <div className="row">
                    <div className="col span_1_of_4">
                        <span className="intro">introduction</span>
                    </div>
                    <div className="col span_1_of_2">
                        <h2>Je m’appelle Desty, je suis Développeur web.</h2>
                        <p className="long-copy">
                            Ayant nourri une attraction pour les technologies émergentes du web au cours de mes expériences professionnelles, je suis à la recherche active d’un stage de (2) mois en développement web à compter de mars 2021.
                            Curieux, rigoureux et persévérant et je souhaiterais intégrer votre équipe pour mettre en évidence ma polyvalence et mon ambition professionnelle.
                        </p><br />
                        <span className="vitae">Curriculum Vitae</span>
                    </div><br />
                </div>

                <div className="row">
                    <div className="col span_1_of_2">
                        <span className="intro">Experience</span>
                    </div>

                    <div className="col span_1_of_2">
                        <h2>Stage | avril – juin 2019 . 3 mois et  CDD | juillet – octobre 2019 . 4 mois</h2>
                        <p className="long-copy">
                            Mon parcours universitaire m’a permis d’acquérir des compétences pratiques par des projets favorisant une forte employabilité dans le domaine du développement web. <br />
                            De plus, j’ai de l’expérience en développement web puisque j’ai travaillé chez la SAS Aidasinistre en qualité d’Analyste Développeur Web pour un stage de 3 mois suivi d’un contrat à durée déterminée de 4 mois. <br />
                            Cette expérience m’a permis d’acquérir de nombreuses compétences que l’on ne peut pas apprendre à l’Université. <br />
                            Travail en autonomie, organiser les priorités, respecter les délais, aborder les normes RGPD concernant le recueil des données numériques ... <br />
                            Autant de compétences que je souhaite mettre à profit pour le développement de votre entreprise. <br />
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Apropos;