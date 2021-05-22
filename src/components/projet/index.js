import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { GiSupersonicArrow } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Projet = () => {

    return (
        <div>
            <section className="section-projets">
                <div className="row">
                    <h2 className="projet">projets universitaires</h2>
                </div>

                <div className="row">
                    <div className="col span_1_of_2">
                        <h3>
                            <Link to="#"><FaGithub />  entity anotator</Link>
                        </h3>
                        <div className="projet-details">
                            <p>
                                <AiOutlineTeam color="#2596be" />  En binône | janvier - avril 2020
                            </p>
                            <span class="objectif">
                                <GiSupersonicArrow color="red" /> Objectif
                            </span> : Construire un annotateur d’entité pour servir d’extraction des entités et un outil de visualisation.<br />
                            <span class="biblio">
                                <GrTechnology color="blue" /> Bibliothèques
                            </span> : Spacy, Pandas, Scikit-learn
                        </div>
                    </div>
                    <div className="col span_1_of_2">
                        <h3>
                            <Link to="https://github.com/Desy16/onepiece-api-data"><FaGithub />  data one piece</Link>
                        </h3>
                        <div className="projet-details">
                            <p>
                                <AiOutlineTeam color="#2596be" />  En binône | janvier - avril 2020
                            </p>
                            <span class="objectif">
                                <GiSupersonicArrow color="red" /> Objectif
                            </span> : Développer une application permettant à l’utilisateur des interactions sous l’angle de la navigation avec des données.<br />
                            <span class="techno">
                                <GrTechnology color="blue" /> Technologies utilisées
                            </span> : Node JS, Express, HandleBars, D3 JS
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col span_1_of_2">
                        <h3>
                            <Link to="https://github.com/gensjaak/quatrecotes-tp4"><FaGithub />   projet venteImmo</Link>
                        </h3>
                        <div className="projet-details">
                            <p>
                                <AiOutlineTeam color="#2596be" />  En binône | janvier - mars 2019
                            </p>
                            <span class="objectif">
                                <GiSupersonicArrow color="red" /> Objectif
                            </span> : Réaliser une application android de ventes immobilières.<br />
                            <span class="biblio">
                                <GrTechnology color="blue" />  Bibliothèques utilisées
                            </span> : Glide, okHTTP, Moshi, SQLITE, GSON, Room, Retrofit
                            </div>
                    </div>

                    <div className="col span_1_of_2">
                        <h3>
                            <Link to="https://github.com/gensjaak/webshot-java"><FaGithub />    projet webShot</Link>
                        </h3>
                        <div className="projet-details">
                            <p>
                                <AiOutlineTeam color="#2596be" />  En binône | janvier - mars 2019
                            </p>
                            <span class="objectif">
                                <GiSupersonicArrow color="red" />  Objectif
                            </span> : Développement d’une API en PHP.<br />
                            <span class="techno">
                                <GrTechnology color="blue" />  Technologies utilisées
                            </span> : Selenium Server Standalone 3141597, Ashot 153, PHP, Commons IO 26, Commons CLI 14
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projet;