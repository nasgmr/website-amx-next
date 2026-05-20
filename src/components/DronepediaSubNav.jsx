'use client';
import Link from 'next/link';

export default function DronepediaSubNav({ active }) {
  const titles = {
    'how-it-works': 'DRONE WORKS',
    'classifications': 'CLASSIFICATION & COMPARISON',
    'applications': 'DRONE APPLICATIONS',
  };

  return (
    <div className="use-case-header-section">
      <h4 className="use-case-label" style={{ fontWeight: 600 }}>DRONEPEDIA</h4>
      <nav className="sub-nav">
        <Link href="/products/dronepedia/how-it-works" className={active === 'how-it-works' ? 'active' : ''}>HOW IT WORKS</Link>
        <Link href="/products/dronepedia/classifications" className={active === 'classifications' ? 'active' : ''}>CLASSIFICATION</Link>
        <Link href="/products/dronepedia/applications" className={active === 'applications' ? 'active' : ''}>APPLICATIONS</Link>
      </nav>
    </div>
  );
}