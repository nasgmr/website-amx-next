import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2023 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2023',
};

export default function Portfolio2023Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2023 */}
      <PortfolioSubNav active="2023" />

      {/* Konten List Portfolio 2023 */}
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