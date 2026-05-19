'use client';

import { useEffect, useRef } from 'react';
// 1. Import useRouter dari next/navigation
import { useSearchParams, useRouter } from 'next/navigation';

const ORDER = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

export default function PortfolioSubNav({ active }) {
  const planeRef = useRef(null);
  const searchParams = useSearchParams();
  // 2. Inisialisasi router
  const router = useRouter(); 

  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;

    const direction = searchParams.get('fly');
    const isMobile = window.innerWidth <= 768;
    const timing = { duration: 1500, easing: 'cubic-bezier(0.25, 1, 0.5, 1)', fill: 'forwards' };

    const flyRight = isMobile
      ? [{ transform: 'translate(-100px, 30px) rotate(15deg)', opacity: 1 }, { transform: 'translate(100vw, -50px) rotate(-5deg)', opacity: 0.5 }]
      : [{ transform: 'translate(-150px, 30px) rotate(15deg)', opacity: 0, offset: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1, offset: 0.9 }, { transform: 'translate(100vw, -50px) rotate(-5deg)', opacity: 0.5, offset: 1 }];

    const flyLeft = isMobile
      ? [{ transform: 'translate(100vw, 30px) scaleX(-1) rotate(15deg)', opacity: 1 }, { transform: 'translate(-100px, -50px) scaleX(-1) rotate(-5deg)', opacity: 0.5 }]
      : [{ transform: 'translate(100vw, 30px) scaleX(-1) rotate(15deg)', opacity: 0, offset: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 1, offset: 0.9 }, { transform: 'translate(-150px, -50px) scaleX(-1) rotate(-5deg)', opacity: 0.5, offset: 1 }];

    setTimeout(() => {
      direction === 'left' ? plane.animate(flyLeft, timing) : plane.animate(flyRight, timing);
    }, 50);

    const elementsToAnimate = document.querySelectorAll(".portfolio-list");
    const dragLeftAnim = [
      { transform: 'translateX(100vw) scale(0.9) skewX(-5deg)', opacity: 0 },
      { transform: 'translateX(-20px) scale(1.02) skewX(2deg)', opacity: 1, offset: 0.8 },
      { transform: 'translateX(0) scale(1) skewX(0deg)', opacity: 1 },
    ];
    const dragRightAnim = [
      { transform: 'translateX(-100vw) scale(0.9) skewX(5deg)', opacity: 0 },
      { transform: 'translateX(20px) scale(1.02) skewX(-2deg)', opacity: 1, offset: 0.8 },
      { transform: 'translateX(0) scale(1) skewX(0deg)', opacity: 1 },
    ];

    elementsToAnimate.forEach(el => {
      direction === 'left' ? el.animate(dragLeftAnim, timing) : el.animate(dragRightAnim, timing);
    });
  }, [searchParams, active]);

  const handleNavClick = (e, year) => {
    e.preventDefault();
    const currentIndex = ORDER.indexOf(active);
    const targetIndex = ORDER.indexOf(year);
    const flyParam = targetIndex < currentIndex ? 'left' : 'right';
    
    // 3. Gunakan router.push() dari Next.js, alih-alih window.location
    router.push(`/about-us/portfolio/${year}?fly=${flyParam}`);
  };

  return (
    <>
      {/* 4. Baris ini akan membungkam peringatan ESLint khusus untuk tag img di bawahnya */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/DRONE - ANIMATION.png" ref={planeRef} className="flying-plane" id="paperPlane" alt="Flying Plane" />

      <div className="portfolio-header">
        <h1 className="category-main-title">PORTFOLIO</h1>
      </div>

      <div className="timeline-nav">
        {ORDER.map((year) => (
          <a
            key={year}
            href={`/about-us/portfolio/${year}`}
            className={active === year ? 'active-year' : ''}
            onClick={(e) => handleNavClick(e, year)}
          >
            {year}
          </a>
        ))}
      </div>
    </>
  );
}