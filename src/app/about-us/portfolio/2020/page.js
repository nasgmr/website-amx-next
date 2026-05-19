import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2020 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2020',
};

export default function Portfolio2020Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2020 */}
      <PortfolioSubNav active="2020" />

      {/* Konten List Portfolio 2020 */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>Flight Data Recorder for Sukhoi SU-27/30 Fighter Pilot, Indonesia, Indonesian Air Force</p>
        </div>
        <div className="portfolio-item">
          <p>MK-82 Bomb Smartfin Research & Development, Indonesia, Indonesian Air Force</p>
        </div>
        <div className="portfolio-item">
          <p>AMX SKX UAV Procurement, Pekalongan (Indonesia), BKPD Kab. Pekalongan</p>
        </div>
      </div>
    </main>
  );
}