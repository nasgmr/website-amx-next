import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Infrastructure | AMX UAV',
  description: 'AMX UAV infrastructure monitoring and planning drone use cases',
};

export default function InfrastructurePage() {
  return (
    <main className="use-case-container">
      {/* Calling Active Use Case Sub Navigation (infrastructure) */}
      <UseCaseSubNav active="infrastructure" />

      {/* Main Content Grid */}
      <div className="case-grid">
        
        {/* Land Use and Industrial Site Planning */}
        <div className="case-item">
          <h3 className="project-title">Land Use and Industrial Site Planning</h3>
          <img 
            src="/img/Use Case - Land Use.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Land Use and Industrial Site Planning"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Batam, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>400Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>200m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>7cm/pixel</span></div>
          </div>
        </div>

        {/* Gas Pipeline Planning */}
        <div className="case-item">
          <h3 className="project-title">Gas Pipeline Planning</h3>
          <img 
            src="/img/Use Case - Gas Pipeline.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Gas Pipeline Planning"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Kalimantan, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>36Km</span></div>
            <div className="stat-item"><label>Altitude</label><span>300m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>9cm/pixel</span></div>
          </div>
        </div>

      </div>
    </main>
  );
}