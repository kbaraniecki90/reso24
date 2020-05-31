import React from 'react';
import { Nav } from '../navigation/Navigation'
import User from '../user/User'

const Header = () => {
    return (
        <header id="header" className="container-fluid">
            {/* Wywołanie Logo -> statyczne */}
            <img src="https://picsum.photos/200/100" alt="" title="" />

            {/* Wywołanie nawigacji */}
            <Nav />

            {/* Profil użytkownika */}
            <User />
        </header>
    );
}

export default Header;