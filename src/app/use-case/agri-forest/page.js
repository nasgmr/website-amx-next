import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Agriculture & Forestry | AMX UAV',
  description: 'AMX UAV agriculture and forestry drone use cases',
};

export default function AgriForestPage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="agri-forest" />
      <div className="case-grid">
        
        {/* Irrigation Modeling */}
        <div className="case-item">
          <h3 className="project-title">Irrigation Modeling</h3>
          <img 
            src="/img/Use Case - Irrigation Modelling.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Irrigation Modeling"
          />
          {/* Menggabungkan class tabel mobile dan grid desktop */}
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Magelang, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>100Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>200m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>6cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Forest Crop Estimation */}
        <div className="case-item">
          <h3 className="project-title">Forest Crop Estimation</h3>
          <img 
            src="/img/Use Case - Forest Crop.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Forest Crop Estimation"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Java, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>200Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>300m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>6cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}