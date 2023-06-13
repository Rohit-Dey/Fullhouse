import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FullHouse</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/room1" className="nav-link">Room 1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/room2" className="nav-link">Room 2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/room3" className="nav-link">Room 3</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;