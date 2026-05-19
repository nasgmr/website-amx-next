import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2021 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2021',
};

export default function Portfolio2021Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2021 */}
      <PortfolioSubNav active="2021" />

      {/* Konten List Portfolio 2021 */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>AMX SKX Upgrade and Modification, Indonesia, Badan Informasi Geospasial</p>
        </div>
        <div className="portfolio-item">
          <p>Joint Research VTOL Quad Tailsitter Modelling & Simulation, Indonesia, UGM Yogyakarta</p>
        </div>
      </div>
    </main>
  );
}