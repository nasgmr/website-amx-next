'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ORDER = ['how-it-works', 'classifications', 'applications'];

export default function DronepediaSubNav({ active }) {
  const planeRef = useRef(null);
  const searchParams = useSearchParams();
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

    const elementsToAnimate = document.querySelectorAll('.dronepedia-content, .applications-grid');
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const currentIndex = ORDER.indexOf(active);
    const targetIndex = ORDER.findIndex(id => href.includes(id));
    const flyParam = targetIndex < currentIndex ? 'left' : 'right';
    router.push(`${href}?fly=${flyParam}`);
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/DRONE - ANIMATION.png" ref={planeRef} className="flying-plane" id="paperPlane" alt="Flying Plane" />
      
      <div className="use-case-header-section">
        <h4 className="use-case-label" style={{ fontWeight: 600 }}>DRONEPEDIA</h4>
        <nav className="sub-nav">
          <a href="/products/dronepedia/how-it-works" className={active === 'how-it-works' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/products/dronepedia/how-it-works')}>HOW IT WORKS</a>
          <a href="/products/dronepedia/classifications" className={active === 'classifications' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/products/dronepedia/classifications')}>CLASSIFICATION</a>
          <a href="/products/dronepedia/applications" className={active === 'applications' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/products/dronepedia/applications')}>APPLICATIONS</a>
        </nav>
        <h1 className="category-main-title">DRONE APPLICATIONS</h1>
      </div>
    </>
  );
}