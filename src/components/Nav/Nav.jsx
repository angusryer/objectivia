import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {

    return (
        <nav className="nav">
            <h2 className="nav__title">objectivia</h2>
            <ul className="nav__links">
                <Link to="/" className="nav__link"><li className="nav__item">home</li></Link>
                <Link to="/play" className="nav__link"><li className="nav__item">play</li></Link>
                <Link to="/about" className="nav__link"><li className="nav__item">about</li></Link>
            </ul>
        </nav>
    )
}
