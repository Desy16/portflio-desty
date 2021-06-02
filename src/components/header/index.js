import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/" class="class-label-firstname">
                        <p class="label-firstname">Desty</p>
                    </Link>
                    <ul className="main-nav">
                        <li><Link to="/projets">Projets</Link></li>
                        <li><Link to="/apropos">A propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Header;