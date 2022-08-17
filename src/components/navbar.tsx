import * as React from 'react';

import logo from '../../assets/logo.png';
import ic_pt from '../../assets/pt.svg';
import ic_en from '../../assets/en.svg';

import 'bulma/css/bulma.min.css';
import '../../assets/css/custom.css';

const style = {
    width: 140,
    height: 50,
    maxHeight: 50
};

const Navbar = () => (
    <nav className="navbar is-fixed-top padding" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={logo} style={style}/>
            </a>

            <a role="button" className="navbar-burger burger burgerMarginTop" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Sobre nós
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            História
                        </a>
                        <a className="navbar-item">
                            Missão/Visão
                        </a>
                    </div>
                </div>

                <a className="navbar-item">
                    Portfólio
                </a>

                <a className="navbar-item" href="./source/pt/contactos.html">
                    Contactos
                </a>

            </div>

            <div className="navbar-end">

                <a className="navbar-item image" href="./source/pt/home.html">
                    <img className="is-rounded languageIcon" src={ic_pt} width="32" height="32"/>
                </a>

                <a className="navbar-item image" href="./source/en/home.html">
                    <img className="is-rounded languageIcon" src={ic_en} width="32" height="32"/>
                </a>

            </div>
        </div>
    </nav>
)

export default Navbar;