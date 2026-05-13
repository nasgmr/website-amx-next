import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <img src="/img/logo.png" alt="AMX UAV Logo" />
        </Link>
        <ul className="nav-links">
          <li><Link href="/">HOME</Link></li>
          <li className="dropdown">
            <Link href="/about-us">ABOUT US</Link>
            <ul className="dropdown-menu">
              <li><Link href="/about-us">Our Story</Link></li>
              <li><Link href="/business-scale">Business Scale</Link></li>
              <li><Link href="/partners-clients">Partners & Clients</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="/products">PRODUCTS</Link>
            <ul className="dropdown-menu">
              <li><Link href="/products-mapping">Mapping & Surveillance</Link></li>
              <li><Link href="/products-education">Education & Hobby</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="/services">SERVICES</Link>
            <ul className="dropdown-menu">
              <li><Link href="/services#aerial-mapping">Aerial Mapping</Link></li>
              <li><Link href="/services#agriculture">Agriculture</Link></li>
              <li><Link href="/services#vr">Virtual Reality</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">RESOURCES</Link>
            <ul className="dropdown-menu">
              <li><Link href="/portfolio-2025">Portfolio</Link></li>
              <li><Link href="/use-case-agri-forest">Use Case</Link></li>
              <li><Link href="/dronepedia-how-it-works">Dronepedia</Link></li>
            </ul>
          </li>
          <li><Link href="/articles">ARTICLES</Link></li>
        </ul>
      </div>
    </nav>
  );
}