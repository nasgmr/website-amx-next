'use client';
import Link from 'next/link';

export default function UseCaseSubNav({ active }) {
  const titles = {
    'infrastructure': 'INFRASTRUCTURE',
    'agri-forest': 'AGRICULTURE & FORESTRY',
    'agri-plant': 'PLANTATION',
    'tourism': 'TOURISM & REAL ESTATE',
  };

  return (
    <div className="use-case-header-section">
      <h4 className="use-case-label" style={{ fontWeight: 600 }}>USE CASE</h4>
      <nav className="sub-nav">
        <Link href="/use-case/infrastructure" className={active === 'infrastructure' ? 'active' : ''}>INFRASTRUCTURE MONITORING & PLANNING </Link>
        <Link href="/use-case/agri-forest" className={active === 'agri-forest' ? 'active' : ''}>AGRICULTURE & FORESTRY</Link>
        <Link href="/use-case/agri-plant" className={active === 'agri-plant' ? 'active' : ''}>AGRICULTURE & PLANTATION</Link>
        <Link href="/use-case/tourism" className={active === 'tourism' ? 'active' : ''}>TOURISM PROMOTION & MINING INVENTORY</Link>
      </nav>
    </div>
  );
}