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
    <div className="use-case-header-section" style={{ marginBottom: '0px', paddingBottom: '0' }}>
      <h4 className="use-case-label" style={{ fontWeight: 600 }}>USE CASE</h4>
      <nav className="sub-nav">
        <Link href="/use-case/infrastructure" className={active === 'infrastructure' ? 'active' : ''}>INFRASTRUCTURE</Link>
        <Link href="/use-case/agri-forest" className={active === 'agri-forest' ? 'active' : ''}>AGRICULTURE & FORESTRY</Link>
        <Link href="/use-case/agri-plant" className={active === 'agri-plant' ? 'active' : ''}>PLANTATION</Link>
        <Link href="/use-case/tourism" className={active === 'tourism' ? 'active' : ''}>TOURISM & REAL ESTATE</Link>
      </nav>
    </div>
  );
}