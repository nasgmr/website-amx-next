'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const ORDER = ['infrastructure', 'tourism', 'agri-forest', 'agri-plant'];

export default function UseCaseSubNav({ active }) {
  const planeRef = useRef(null);
  const searchParams = useSearchParams();

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
      if (direction === 'left') {
        plane.animate(flyLeft, timing);
      } else {
        plane.animate(flyRight, timing);
      }
    }, 50);

    const elementsToAnimate = document.querySelectorAll(".category-main-title, .case-grid");
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
      if (direction === 'left') {
        el.animate(dragLeftAnim, timing);
      } else {
        el.animate(dragRightAnim, timing);
      }
    });
  }, [searchParams, active]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const currentIndex = ORDER.indexOf(active);
    const targetIndex = ORDER.findIndex(id => href.includes(id));
    const flyParam = targetIndex < currentIndex ? 'left' : 'right';
    window.location.href = href + '?fly=' + flyParam;
  };

  const getTitle = () => {
    switch (active) {
      case 'infrastructure': return 'INFRASTRUCTURE MONITORING & PLANNING';
      case 'tourism': return 'TOURISM PROMOTION & MINING INVENTORY';
      case 'agri-forest': return 'AGRICULTURE & FORESTRY';
      case 'agri-plant': return 'AGRICULTURE & PLANTATION';
      default: return 'USE CASE';
    }
  };

  return (
    <>
      <img src="/img/DRONE - ANIMATION.png" ref={planeRef} className="flying-plane" id="paperPlane" alt="Flying Plane" />
      <div className="use-case-header-section">
        <h4 className="use-case-label" style={{ fontWeight: 600 }}>USE CASE</h4>
        <nav className="sub-nav">
          <a href="/use-case/infrastructure" className={active === 'infrastructure' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/use-case/infrastructure')}>INFRASTRUCTURE MONITORING</a>
          <a href="/use-case/tourism" className={active === 'tourism' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/use-case/tourism')}>TOURISM PROMOTION</a>
          <a href="/use-case/agri-forest" className={active === 'agri-forest' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/use-case/agri-forest')}>AGRICULTURE & FOREST</a>
          <a href="/use-case/agri-plant" className={active === 'agri-plant' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/use-case/agri-plant')}>AGRICULTURE & PLANTATION</a>
        </nav>
        <h1 className="category-main-title">{getTitle()}</h1>
      </div>
    </>
  );
}