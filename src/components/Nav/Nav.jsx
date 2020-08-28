import React from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {

    const history = useHistory();

    return (
        <nav className="nav">
            <h2 className="nav__title">Objectivia</h2>
            <ul className="nav__links">
                <li className="nav__item" onClick={() => history.push('/')}>HOME</li>
                <li className="nav__item" onClick={() => history.push('/play')}>PLAY</li>
                <li className="nav__item" onClick={() => history.push('/help')}>HELP</li>
            </ul>
        </nav>
    )
}
