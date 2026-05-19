import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Tourism & Mining | AMX UAV',
  description: 'AMX UAV tourism promotion and mining site inventory use cases',
};

export default function TourismPage() {
  return (
    <main className="use-case-container">
      {/* Calling Active Use Case Sub Navigation (tourism) */}
      <UseCaseSubNav active="tourism" />

      {/* Main Content Grid */}
      <div className="case-grid">
        
        {/* Virtual Reality For Tourism Promotion */}
        <div className="case-item">
          <h3 className="project-title">Virtual Reality For Tourism Promotion</h3>
          <img 
            src="/img/Use Case - Virtual Reality.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Virtual Reality For Tourism Promotion"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Flores, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>1000Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>200m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>7cm/pixel</span></div>
          </div>
        </div>

        {/* Nickel Mine Site Inventory */}
        <div className="case-item">
          <h3 className="project-title">Nickel Mine Site Inventory</h3>
          <img 
            src="/img/Use Case - Nickel Mine.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Nickel Mine Site Inventory"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Kolaka, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>7000Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>250m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>7cm/pixel</span></div>
          </div>
        </div>

      </div>
    </main>
  );
}