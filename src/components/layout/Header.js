import React from 'react';
import { Nav } from './Navigation'
import User from './User'

const Header = () => {
    return (
        <header id="header" className="container-fluid ">
            <div className="d-flex w-100 m-0 justify-content-between">
                {/* Wywołanie Logo -> statyczne */}
                <div className="col-4? d-flex">
                    <img src="logo.svg" alt="" title="" className="h-100" />
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