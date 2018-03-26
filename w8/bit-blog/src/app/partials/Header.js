import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo"> BIT BLOG</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/AuthorsPage' >Authors</Link></li>
                        <li><Link to='/AboutPage' >About</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;