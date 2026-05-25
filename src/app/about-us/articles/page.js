export const metadata = {
  title: 'Articles - AMX UAV',
  description: 'Read the latest articles and highlights from AMX UAV.',
};

export default function ArticlesPage() {
  return (
    <main className="articles-section">
      <h1 className="articles-title">ARTICLES</h1>

      <div className="articles-grid-container">
        
        {/* Highlight Article */}
        <div className="articles-highlight-col">
          <div className="list-card">
            <div className="list-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/Use Case - Land Use.png" alt="Highlight Article" />
            </div>
            <div className="list-card-content">
              <h4 className="highlight-title" style={{ fontWeight: 600 }}>HIGHLIGHTS</h4>
              <h3>Title Article 1</h3>
              <div className="article-meta">
                <span className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  AMX UAV
                </span>
                <span className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/><path d="M7 12h5v5H7z"/></svg>
                  Released Date
                </span>
              </div>
              <p className="article-brief">Brief information of the article</p>
              <a href="/about-us/articles/article-1" className="btn-read-more">Read More</a>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="list-card">
          <div className="list-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Use Case - Land Use.png" alt="List Article" />
          </div>
          <div className="list-card-content">
            <h3>Title Article 2</h3>
            <div className="article-meta">
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                AMX UAV
              </span>
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/><path d="M7 12h5v5H7z"/></svg>
                Released Date
              </span>
            </div>
            <p className="article-brief">Brief information of the article</p>
            <a href="/about-us/articles/article-2" className="btn-read-more">Read More</a>
          </div>
        </div>

        {/* Article 3 */}
        <div className="list-card">
          <div className="list-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Use Case - Land Use.png" alt="List Article" />
          </div>
          <div className="list-card-content">
            <h3>Title Article 3</h3>
            <div className="article-meta">
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                AMX UAV
              </span>
              <span className="meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/><path d="M7 12h5v5H7z"/></svg>
                Released Date
              </span>
            </div>
            <p className="article-brief">Brief information of the article</p>
            <a href="/about-us/articles/article-3" className="btn-read-more">Read More</a>
          </div>
        </div>

      </div>
    </main>
  );
}