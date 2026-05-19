import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2022 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2022',
};

export default function Portfolio2022Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2022 */}
      <PortfolioSubNav active="2022" />

      {/* Konten List Portfolio 2022 */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>VR Development for Tourism Object Promotion, Indonesian Ministry of Education and Culture</p>
        </div>
        <div className="portfolio-item">
          <p>AMX SKX Upgrade and Modification, Indonesia, PT Austindo Nusantara Jaya</p>
        </div>
        <div className="portfolio-item">
          <p>Multi Drone System Research, Indonesia, UGM Yogyakarta</p>
        </div>
      </div>
    </main>
  );
}