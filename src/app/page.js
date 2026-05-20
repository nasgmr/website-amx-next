"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [galleryPos, setGalleryPos] = useState(['pos-left', 'pos-center', 'pos-right']);
  const galleryRef = useRef(null);

  const nextSlide = () => {
    setGalleryPos((prev) => {
      const newPos = [...prev];
      newPos.unshift(newPos.pop());
      return newPos;
    });
  };

  const prevSlide = () => {
    setGalleryPos((prev) => {
      const newPos = [...prev];
      newPos.push(newPos.shift());
      return newPos;
    });
  };

  useEffect(() => {
    const galleryElement = galleryRef.current;
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    };

    if (galleryElement) {
      galleryElement.addEventListener('touchstart', handleTouchStart);
      galleryElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('touchstart', handleTouchStart);
        galleryElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <div className="homepage-body">
      
      {/* 1. HERO SECTION */}
      <main className="hero-section">
        <h1 className="glowing-text">DRONE SOLUTION FOR INDUSTRY 5.0</h1>
        <p>AMX UAV offer mapping drone and services for various industry</p>
        <a href="https://drive.google.com/file/d/1APSnKeG_bUYtVmAfQr0WhkKxK9-ws2O9/view?usp=sharing" target="_blank" className="btn-learn-more" rel="noreferrer">Learn More</a>
        <div className="social-icons">
          <a href="https://www.instagram.com/amx.uav" target="_blank" className="social-link" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/amx.uav/" target="_blank" className="social-link" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com/company/amxuav" target="_blank" className="social-link" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@amxuav2935" target="_blank" className="social-link" rel="noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </main>

      {/* 2. PRODUCT HIGHLIGHT */}
      <section className="hp-product-highlight">
        <div className="hp-highlight-container">
          <div className="hp-mobile-title-area">
            <h4 className="hp-category-label">Compact eVTOL Drone</h4>
            <h1 className="hp-main-title">VERTIC AIR</h1>
          </div>

          <div className="hp-highlight-media">
            <div className="hp-placeholder-box"></div>
          </div>

          <div className="hp-highlight-info">
            <p className="hp-main-desc">
              Vertic Air is easy to control, fully autonomous, and capable to operate from narrow vertical take off-landing (VTOL) mapping drone.
            </p>
            <ul className="hp-feature-list">
              <li><i className="fas fa-check-circle"></i> Vertical Take-Off Landing</li>
              <li><i className="fas fa-check-circle"></i> Fully autonomous mission</li>
              <li><i className="fas fa-check-circle"></i> 40 minutes flight time</li>
              <li><i className="fas fa-check-circle"></i> Wind Resist 14m/s (fixed wing) & 9m/s (copter)</li>
              <li><i className="fas fa-check-circle"></i> Light and Strong Composites Material</li>
              <li><i className="fas fa-check-circle"></i> PPK Ready</li>
              <li><i className="fas fa-check-circle"></i> RGB and Multispectral Camera Payload</li>
            </ul>
            
            <div className="hp-btn-footer-mobile">
              <Link href="/products" className="btn-see-more-gray">See More Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section className="hp-video-section">
        <div className="hp-video-wrapper">
          <iframe src="https://www.youtube-nocookie.com/embed/jQkANpci7Aw?rel=0" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      {/* 4. BASIC ARTICLES SECTION */}
      <section className="hp-basic-articles-section">
        <h1 className="hp-section-title" style={{ fontSize: '35px' }}> Whether starting out or scaling up <br /> —AMX UAV delivers precision data, simplified.</h1>
        <div className="hp-basic-articles-list">
          <Link href="/products/dronepedia/how-it-works" className="hp-basic-articles-card-list">
            <div className="hp-basic-card-list-text">
              <h3 className="hp-basic-article-title">New to Aerial Surveying?</h3>
              <p className="hp-excerpt">Discover a seamless end-to-end workflow designed to take your operations from the ground to the sky with ease.</p>
            </div>
            <div className="hp-basic-card-list-img">
              <img src="/img/AMX-GCS.jpg" alt="" />
            </div>
          </Link>

          <Link href="/products/mapping/vertic-xl" className="hp-basic-articles-card-list">
            <div className="hp-basic-card-list-text">
              <h3 className="hp-basic-article-title">Already Flying?</h3>
              <p className="hp-excerpt">Elevate your results with Vertic XL. Our flagship eVTOL is engineered for long-range missions and total data confidence.</p>
            </div>
            <div className="hp-basic-card-list-img">
              <img src="/img/AMX-GCS.jpg" alt="" />
            </div>
          </Link>
        </div>
      </section>

      {/* 5. OUR WORKS */}
      <section className="hp-articles-section">
        <h1 className="hp-section-title">OUR WORKS</h1>
        <div className="hp-articles-list">
          {[1, 2, 3].map((i) => (
            <div className="hp-card-list" key={i}>
              <div className="hp-card-list-text">
                <h3 className="hp-article-title">Title Article {i}</h3>
                <p className="hp-excerpt">Brief information of the article content that makes users interested in reading more.</p>
                <Link href={`/about-us/articles/article-${i}`} className="hp-btn-read">Read More</Link>
              </div>
              <div className="hp-card-list-img">
                <img src="/img/AMX-GCS.jpg" alt="" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="hp-action-center">
          <Link href="/about-us/articles" className="btn-see-more-gray">See More</Link>
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section className="hp-gallery-section">
        <h1 className="hp-section-title">OUR GALLERY</h1>
        <div className="hp-gallery-container" ref={galleryRef}>
          <div className="hp-arrow" onClick={prevSlide} id="prevBtn"><i className="fas fa-caret-left"></i></div>
          
          <div className="hp-gallery-track">
            <div className={`hp-frame hp-slider-node ${galleryPos[0]}`}>
              <img src="/img/Use Case - Land Use.png" alt="Land Use" />
            </div>
            <div className={`hp-frame hp-slider-node ${galleryPos[1]}`}>
              <img src="/img/Use Case - Soil Moisture.png" alt="Soil Moisture" />
            </div>
            <div className={`hp-frame hp-slider-node ${galleryPos[2]}`}>
              <img src="/img/Use Case - Irrigation Modelling.png" alt="Irrigation" />
            </div>
          </div>

          <div className="hp-arrow" onClick={nextSlide} id="nextBtn"><i className="fas fa-caret-right"></i></div>
        </div>
      </section>

    </div>
  );
}