'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/img/logo.png" alt="AMX UAV Logo" width={100} height="auto" />
        </Link>
      </div>

      <div
        className={`menu-toggle${menuOpen ? ' is-active' : ''}`}
        id="mobile-menu"
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="nav-links">
        <li className="dropdown">
          <a
            href="/products"
            className="dropbtn"
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown('products');
              }
            }}
          >
            Products
          </a>
          <div className={`dropdown-content${openDropdown === 'products' ? ' show-mobile' : ''}`}>
            <Link href="/products">Products</Link>
            <Link href="/products/dronepedia">Dronepedia</Link>
          </div>
        </li>

        <li><Link href="/services">Services</Link></li>
        <li><Link href="/use-case">Use Case</Link></li>

        <li className="dropdown">
          <a
            href="/about-us"
            className="dropbtn"
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown('about');
              }
            }}
          >
            About Us
          </a>
          <div className={`dropdown-content${openDropdown === 'about' ? ' show-mobile' : ''}`}>
            <Link href="/about-us" className="mobile-only-menu" style={{ fontWeight: 'bold', color: '#959595' }}>
              About Us Overview
            </Link>
            <Link href="/about-us/business-scale">Business Scale Overview</Link>
            <Link href="/about-us/partners-clients">Partners & Clients</Link>
            <Link href="/about-us/portfolio">Portfolio</Link>
            <Link href="/about-us/articles">Articles</Link>
          </div>
        </li>
      </ul>

      <div className={`nav-actions${menuOpen ? ' active' : ''}`} id="nav-actions">
        <a href="https://wa.me/+62811292565" target="_blank" rel="noopener noreferrer" className="btn-sales">
          Talk To Sales
        </a>
      </div>
    </nav>
  );
}