import UseCaseSubNav from '../../../components/UseCaseSubNav';
export const metadata = {
  title: 'Use Case - Agriculture & Plantation | AMX UAV',
  description: 'AMX UAV agriculture and plantation drone use cases',
};
export default function AgriPlantPage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="agri-plant" />
      <div className="case-grid">
        
        {/* Soil Nutrient Estimation */}
        <div className="case-item">
          <h3 className="project-title">Soil Nutrient Estimation</h3>
          <img 
            src="/img/Use Case - Soil Nutrient.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Nutrient Estimation"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Magelang, Indonesia</td></tr>
              <tr><th>Total Area</th><td>500Ha</td></tr>
              <tr><th>Altitude</th><td>200m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>6cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Soil Moisture Estimation */}
        <div className="case-item">
          <h3 className="project-title">Soil Moisture Estimation</h3>
          <img 
            src="/img/Use Case - Soil Moisture.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Moisture Estimation"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Java, Indonesia</td></tr>
              <tr><th>Total Area</th><td>200Ha</td></tr>
              <tr><th>Altitude</th><td>200m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>6cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}