import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2025 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2025',
};

export default function Portfolio2025Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2025 */}
      <PortfolioSubNav active="2025" />

      {/* Konten List Portfolio 2025 */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>Sumbawa Gold Mine Aerial Mapping, PT Intam, Indonesia</p>
        </div>
        <div className="portfolio-item">
          <p>Kaligintung Tea Plantation Aerial Mapping, PSN, Indonesia</p>
        </div>
        <div className="portfolio-item">
          <p>Guwosari Village Aerial Mapping & VR Promotion, UNY, Indonesia</p>
        </div>
        <div className="portfolio-item">
          <p>Pacarejo Village Aerial Mapping & VR Promotion, UNY, Indonesia</p>
        </div>
        <div className="portfolio-item">
          <p>Qubit Education Drone Procurement, Smart Extra Aeromodelling-Drone, Indonesia</p>
        </div>
        <div className="portfolio-item">
          <p>Gamagora 7 Paddy Monitoring, UGM, Indonesia</p>
        </div>
      </div>
    </main>
  );
}