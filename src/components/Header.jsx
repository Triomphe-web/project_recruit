import React from 'react';
import '../css/header.css';
import logo from '../assets/vite.svg';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container mt-4">
        <NavLink to="/">
          <div className="row">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="px-2 title"> E-recruit</h1>
          </div>
        </NavLink>
        <div className="d-flex justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active ">
                <NavLink className="nav-link" to="/jobs">
                  Emplois
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/security" className="nav-link">
                  Sécurité
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink to="/signin" className="nav-link">
                  S'Inscrire
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/acceuil">
                  Se Connecter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
