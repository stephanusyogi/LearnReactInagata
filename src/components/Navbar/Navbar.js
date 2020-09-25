import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return  (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
                <Link to="/" className="navbar-brand">
                <img src="https://cokro.com/assets/icons/logo-2.svg?v=1"  className="d-inline-block align-top" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <h5>Cokro JSON Testing</h5>
                </div>
            </nav>
        </div>
    );
};

export default Navbar
