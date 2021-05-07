import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div class="row">
                        <Link to="/" class="class-text-firstname">
                            <span class="text-firstname">Desty</span>
                        </Link>
                        <ul class="main-nav">
                            <li><Link to="/projets">Projets</Link></li>
                            <li><Link to="/apropos">A propos</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Header;