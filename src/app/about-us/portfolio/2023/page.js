import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2023 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2023',
};

export default function Portfolio2023Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Calling Portfolio Sub Navigation (2023) */}
      <PortfolioSubNav active="2023" />

      {/* Main Content Grid */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>Salatiga City Aerial Mapping, Indonesia, Salatiga City Government</p>
        </div>
        <div className="portfolio-item">
          <p>Pomalaa Mine Land Inventory, Indonesia, PT Aneka Tambang</p>
        </div>
        <div className="portfolio-item">
          <p>Vertic Block III VTOL Drone Development, Indonesia Research and Innovation Board (BRIN)</p>
        </div>
      </div>
    </main>
  );
}