import React from 'react';
// import logo from '../logo.svg';

const Header = () => (
    <header>
        <div className="collapse" id="navbarToggleExternalContent">
        </div>
        <nav className="navbar navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-center">
                <h1 className="text-secondary">SKADOOSHHH</h1>
            </div>
            <h3>
                <img src="https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg" width="50" height="50" alt="avatar" className="rounded-circle"/>
            </h3>
        </nav>
    </header>
);

export default Header;