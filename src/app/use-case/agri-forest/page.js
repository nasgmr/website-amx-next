import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Agriculture & Forestry | AMX UAV',
  description: 'AMX UAV agriculture and forestry drone use cases',
};

export default function AgriForestPage() {
  return (
    <main className="use-case-container">
      {/* Calling Active Use Case Sub Navigation (agri-forest) */}
      <UseCaseSubNav active="agri-forest" />

      {/* Main Content Grid */}
      <div className="case-grid">
        
        {/* Irrigation Modeling */}
        <div className="case-item">
          <h3 className="project-title">Irigation Modeling</h3>
          <img 
            src="/img/Use Case - Irrigation Modelling.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Irrigation Modeling"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Magelang, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>100Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>200m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>6cm/pixel</span></div>
          </div>
        </div>

        {/* Forest Crop Estimation */}
        <div className="case-item">
          <h3 className="project-title">Forest Crop Estimation</h3>
          <img 
            src="/img/Use Case - Forest Crop.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Forest Crop Estimation"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Java, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>200Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>300m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>6cm/pixel</span></div>
          </div>
        </div>

      </div>
    </main>
  );
}