'use client';
import Link from 'next/link';

export default function ProductsSubNav({ active }) {
  const titles = {
    'mapping': 'MAPPING DRONE',
    'surveillance': 'SURVEILLANCE DRONE',
    'education': 'EDUCATION DRONE',
  };

  return (
    <div className="use-case-header-section">
      <h4 className="use-case-label" style={{ fontWeight: 600 }}>OUR PRODUCTS</h4>
      <nav className="sub-nav">
        <Link href="/products/mapping" className={active === 'mapping' ? 'active' : ''}>MAPPING DRONE</Link>
        <Link href="/products/education" className={active === 'education' ? 'active' : ''}>EDUCATION DRONE</Link>
      </nav>
    </div>
  );
}