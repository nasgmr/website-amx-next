import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AMX UAV</h3>
          <p>CV AMX UAV Technologies</p>
          <p>Jl. Kaliurang KM. 9,3, Yogyakarta</p>
          <p>Email: amxuav.id@gmail.com</p>
          <p>Phone: +62 821-3456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio-2025">Portfolio</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://instagram.com/amxuav" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@amxuav" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://linkedin.com/company/amx-uav" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AMX UAV Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}