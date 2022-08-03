/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Nav = () => (
  <div className="navbar">
    <div>
      <NavLink className="brand" to="/">
        <img src={logo} alt="logo" className="brand-logo" />
        <span className="brand-name">Space Travelers' Hub </span>
      </NavLink>
    </div>
    <ul className="nav-links">
      <li>
        <NavLink className="nav-item" to="/rockets">Rockets</NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink className="nav-item" to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
