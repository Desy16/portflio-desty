import React from 'react';

import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';

/**
 * bleu : #53acf4, #d8ecfc, #95ccf4, #74bcf4, #389fec, #2a9aec, #45a4f4, #acd4fc, #64b4f4
 */

const Footer = () => {
    return (
        <div>
            <section>
                <div className="row">
                    <div class="col span-1-of-2">
                        <ul class="social-links">
                            <li>
                                <Link to="https://www.linkedin.com/in/desty-mpassi-matondo-628120a8">
                                    <AiFillLinkedin color="#2596be" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://twitter.com/destympassi">
                                    <FaTwitterSquare color="#53acf4" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.github.com/Desy16">
                                    <FaGithub color="#000" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <p className="text-copyright">
                        &copy; 2021 Desty Mpassi Matondo
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Footer;