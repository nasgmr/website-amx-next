'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const ORDER = ['mapping', 'education'];

export default function ProductsSubNav({ active }) {
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
      direction === 'left' ? plane.animate(flyLeft, timing) : plane.animate(flyRight, timing);
    }, 50);

    const elementsToAnimate = document.querySelectorAll('.product-list, .drone-usage-section');
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
  }, [searchParams]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const currentIndex = ORDER.indexOf(active);
    const targetIndex = ORDER.findIndex(id => href.includes(id));
    const flyParam = targetIndex < currentIndex ? 'left' : 'right';
    window.location.href = href + '?fly=' + flyParam;
  };

  return (
    <>
      <img src="/img/DRONE - ANIMATION.png" ref={planeRef} className="flying-plane" alt="Flying Drone" />
      <div className="products-header-section" style={{ textAlign: 'center', marginBottom: '-20px' }}>
        <h4 className="products-label" style={{ fontWeight: 600 }}>OUR PRODUCTS</h4>
        <nav className="sub-nav" style={{ justifyContent: 'center', display: 'flex' }}>
          <a
            href="/products/mapping"
            className={active === 'mapping' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/products/mapping')}
          >
            MAPPING DRONE
          </a>
          <a
            href="/products/education"
            className={active === 'education' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, '/products/education')}
          >
            EDUCATION DRONE
          </a>
        </nav>
      </div>
    </>
  );
}