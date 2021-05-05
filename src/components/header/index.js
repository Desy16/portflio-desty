import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div class="row">
                        <a href="#" class="class-text-firstname">
                            <span class="text-firstname">Desty</span>
                        </a>
                        <ul class="main-nav">
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">A propos</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="port-text-box">
                    <h1>
                        Hello ! Bienvenu(e) sur mon portofolio.<br />
                        Je m’appelle <span class="firstname">Desty</span> et je suis Dévéloppeur web.
                    </h1>
                </div>
            </header>
        </div >
    )
}

export default Header;