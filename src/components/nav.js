import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import '../styles/Navbar.css';

const Nav = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      url: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      url: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo-img" />
        <h1 className="nav-head">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-links">
        {urls.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink to={url.url}>{url.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
