import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userAvatar from '../assets/userAvatar.png';
import './Styles/NavBar.css';

const NavBar = () => (
  <nav className="header-nav">
    <ul className="header-nav-items">
      <li className="header-nav-items nav-brand-logo">
        <Link to="/" className="brand-logo">Bookstore CMS</Link>
      </li>
      <li className="header-nav-items">
        <NavLink to="/">Books</NavLink>
      </li>
      <li className="header-nav-item">
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <button type="button" className="user-avatar">
      <img src={userAvatar} alt="user-avatar" />
      <span>
        <i className="fa-solid fa-user user" />
      </span>
    </button>
  </nav>
);
export default NavBar;
