import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2024 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2024',
};

export default function Portfolio2024Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan mengatur active tab ke 2024 */}
      <PortfolioSubNav active="2024" />

      {/* Konten List Portfolio 2024 */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>Augmented Reality Drone Assisted Scouting, Indonesian Ministry of Education and Culture-UGM</p>
        </div>
        <div className="portfolio-item">
          <p>Agri Watch Net, Indonesian Ministry of Education and Culture-UGM</p>
        </div>
        <div className="portfolio-item">
          <p>Multi UAV Development, Indonesia, Indonesian Ministry of Education and Culture-Universitas Negeri Yogyakarta</p>
        </div>
        <div className="portfolio-item">
          <p>Vertic Block III VTOL Drone Procurement, Indonesia, Universitas Negeri Yogayakarta</p>
        </div>
        <div className="portfolio-item">
          <p>Vertic Block III VTOL Drone Procurement, Indonesia, KJSB Pandu Arsa</p>
        </div>
        <div className="portfolio-item">
          <p>Kampung Gunung Development Aerial Mapping, PT Tanivest Agro Development</p>
        </div>
        <div className="portfolio-item">
          <p>Vertic XL VTOL Drone Development, Indonesia Research and Innovation Board (BRIN)</p>
        </div>
      </div>
    </main>
  );
}