import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Infrastructure & Mining | AMX UAV',
  description: 'AMX UAV infrastructure and mining drone use cases',
};

export default function InfrastructurePage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="infrastructure" />
      <div className="case-grid">
        
        {/* Gas Pipeline Inspection */}
        <div className="case-item">
          <h3 className="project-title">Gas Pipeline Inspection</h3>
          <img 
            src="/img/Use Case - Gas Pipeline.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Gas Pipeline Inspection"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Sumatra, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>50Km</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>150m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>5cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Nickel Mine Mapping */}
        <div className="case-item">
          <h3 className="project-title">Nickel Mine Mapping</h3>
          <img 
            src="/img/Use Case - Nickel Mine.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Nickel Mine Mapping"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Sulawesi, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>350Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>200m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>5.5cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}