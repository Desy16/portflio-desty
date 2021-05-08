import React from 'react';

const Projet = () => {

    return (
        <div>
            <section className="section-projets">
                <div className="row">
                    <h2>projets universitaires</h2>
                </div>

                <div className="row">
                    <div className="col span 1-of-4">
                        <img src="#" alt="#" />
                        <h3>projet entity anotator</h3>
                        <div className="projet-details">
                            <p>En binône | janvier - avril 2020</p>
                            <span class="objectif">Objectif </span>: Construire un annotateur d’entité pour servir d’extraction des entités et un outil de visualisation.<br />
                            <span class="biblio">Bibliothèques </span>: Spacy, Pandas, Scikit-learn
                        </div>
                    </div>
                    <div className="col span 1-of-4">
                        <img src="#" alt="#" />
                        <h3>projet data one piece</h3>
                        <div className="projet-details">
                            <p>En binône | janvier - avril 2020</p>
                            <span class="objectif">Objectif</span>: Développer une application permettant à l’utilisateur des interactions sous l’angle de la navigation avec des données.<br />
                            <span class="techno">Technologies utilisées </span>: Node JS, Express, HandleBars, D3 JS
                        </div>
                    </div>
                    <div className="col span 1-of-4">
                        <img src="#" alt="#" />
                        <h3>projet webShot</h3>
                        <div className="projet-details">
                            <p>En binône | janvier - mars 2019</p>
                            <span class="objectif">Objectif</span> : Développement d’une API en PHP.<br />
                            <span class="techno">Technologies utilisées </span> : Selenium Server Standalone 3141597, Ashot 153, PHP, Commons IO 26, Commons CLI 14
                        </div>
                    </div>
                    <div className="col span 1-of-4">
                        <img src="#" alt="#" />
                        <h3>projet venteImmo</h3>
                        <div className="projet-details">
                            <p>En binône | janvier - mars 2019</p>
                            <span class="objectif">Objectif</span> : Réaliser une application android de ventes immobilières.<br />
                            <span class="biblio">Bibliothèques utilisées </span> : Glide, okHTTP, Moshi, SQLITE, GSON, Room, Retrofit
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projet;