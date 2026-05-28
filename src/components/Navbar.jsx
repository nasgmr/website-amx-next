'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (e, name) => {
    if (isMobile) {
      e.preventDefault();
      setOpenDropdown(prev => (prev === name ? null : name));
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          <Image src="/img/logo.png" alt="AMX UAV Logo" width={100} height={40} style={{ height: 'auto' }} priority />
        </Link>
      </div>

      <button
        type="button"
        className={`menu-toggle${menuOpen ? ' is-active' : ''}`}
        id="mobile-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="nav-links">
        <li className="dropdown">
          <Link
            href="/products"
            className="dropbtn"
            onClick={(e) => handleDropdownClick(e, 'products')}
          >
            Products
          </Link>
          <div className={`dropdown-content${openDropdown === 'products' ? ' show-mobile' : ''}`}>
            <Link href="/products" onClick={closeMenu}>All Products</Link>
            <Link href="/products/dronepedia" onClick={closeMenu}>Dronepedia</Link>
          </div>
        </li>

        <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link href="/use-case" onClick={closeMenu}>Use Case</Link></li>

        <li className="dropdown">
          <Link
            href="/about-us"
            className="dropbtn"
            onClick={(e) => handleDropdownClick(e, 'about')}
          >
            About Us
          </Link>
          <div className={`dropdown-content${openDropdown === 'about' ? ' show-mobile' : ''}`}>
            <Link href="/about-us/business-scale" onClick={closeMenu}>Business Scale Overview</Link>
            <Link href="/about-us/partners-clients" onClick={closeMenu}>Partners & Clients</Link>
            <Link href="/about-us/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link href="/about-us/articles" onClick={closeMenu}>Articles</Link>
          </div>
        </li>
      </ul>

      <div className={`nav-actions${menuOpen ? ' active' : ''}`} id="nav-actions">
        <a 
          href="https://wa.me/+62811292565" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-sales" 
          onClick={closeMenu}
        >
          Talk To Sales
        </a>
      </div>
    </nav>
  );
}