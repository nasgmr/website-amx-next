'use client';

import Link from 'next/link';

const ORDER = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

export default function PortfolioSubNav({ active }) {
  return (
    <>
      <div className="portfolio-header">
        <h1 className="category-main-title">PORTFOLIO</h1>
      </div>

      <div className="timeline-nav">
        {ORDER.map((year) => (
          <Link
            key={year}
            href={`/about-us/portfolio/${year}`}
            className={active === year ? 'active-year' : ''}
          >
            {year}
          </Link>
        ))}
      </div>
    </>
  );
}