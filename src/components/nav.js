/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Nav = () => (
  <div className="navbar">
    <div>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
    <div>
      <NavLink className="nav-item" to="/profile">My Profile</NavLink>
    </div>
  </div>
);

export default Nav;
