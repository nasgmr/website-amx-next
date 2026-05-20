'use client';
import Link from 'next/link';

export default function PortfolioSubNav({ active }) {
  const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <div className="use-case-header-section" style={{ marginBottom: '0px', paddingBottom: '0' }}>
      <h4 className="use-case-label" style={{ fontWeight: 600 }}>PORTFOLIO</h4>
      <nav className="sub-nav">
        {years.map((year) => (
          <Link 
            key={year} 
            href={`/about-us/portfolio/${year}`} 
            className={active === year ? 'active' : ''}
          >
            {year}
          </Link>
        ))}
      </nav>
    </div>
  );
}