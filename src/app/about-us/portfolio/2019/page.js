import PortfolioSubNav from '../../../../components/PortfolioSubNav';

export const metadata = {
  title: 'Portfolio 2019 - AMX UAV',
  description: 'AMX UAV projects and portfolio from the year 2019',
};

export default function Portfolio2019Page() {
  return (
    <main className="portfolio-container portfolio-page">
      {/* Calling Portfolio Sub Navigation (2019) */}
      <PortfolioSubNav active="2019" />

      {/* Main Content Grid */}
      <div className="portfolio-list">
        <div className="portfolio-item">
          <p>850Ha Industrial Forest Aerial Mapping, Barito Utara (Indonesia), PT Geomatrix Radhika Nusantara</p>
        </div>
        <div className="portfolio-item">
          <p>UAV Technical Assistance, Yogyakarta (Indonesia), Indonesian Ministry of Village</p>
        </div>
        <div className="portfolio-item">
          <p>Gas Pipeline Aerial Mapping, Barito Utara (Indonesia), Geomatrix Radhika Nusantara</p>
        </div>
        <div className="portfolio-item">
          <p>Fixed Wing UAV for Mapping, Yogyakarta (Indonesia), UPN &quot;Veteran&quot; Yogakarta</p>
        </div>
      </div>
    </main>
  );
}