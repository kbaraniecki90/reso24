import React from 'react';
import { Nav } from '../navigation/Navigation'
import User from '../user/User'

const Header = () => {
    return (
        <header id="header" className="container-fluid ">
            <div className="row">
                {/* Wywołanie Logo -> statyczne */}
                <div className="col-4">
                    <img src="logo.svg" alt="" title="" className="img-fluid" />
                </div>

                {/* Wywołanie nawigacji */}
                <Nav />

                {/* Profil użytkownika */}
                <User />
            </div>
        </header>
    );
}

export default Header;