import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2018 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2018',
};

export default function Portfolio2018Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Memanggil Navigasi dan Animasi Pesawat */}
      <PortfolioSubNav active="2018" />

      {/* Konten List Portfolio */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>UAV for Mapping Training, Pekalongan (Indonesia), Indonesian Ministry of Villages</p>
        </div>
        <div className="portfolio-item">
          <p>AMX BIX UAV Procurement, Jakarta (Indonesia), Indonesian Ministry of Villages</p>
        </div>
        <div className="portfolio-item">
          <p>200Ha Suvarna Sutera Aerial Mapping, Tangerang (Indonesia), CV Mitra Geotama</p>
        </div>
      </div>
    </main>
  );
}