import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Agriculture Plantation | AMX UAV',
  description: 'AMX UAV agriculture plantation drone use cases',
};

export default function AgriPlantPage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="agri-plant" />
      <div className="case-grid">
        
        {/* Soil Moisture Analysis */}
        <div className="case-item">
          <h3 className="project-title">Soil Moisture Analysis</h3>
          <img 
            src="/img/Use Case - Soil Moisture.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Moisture Analysis"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Batam, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>400Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>200m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>7cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Soil Nutrient Mapping */}
        <div className="case-item">
          <h3 className="project-title">Soil Nutrient Mapping</h3>
          <img 
            src="/img/Use Case - Soil Nutrient.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Nutrient Mapping"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Riau, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>1200Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>250m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>6.5cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}