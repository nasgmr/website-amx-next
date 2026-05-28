import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Tourism & Land Use | AMX UAV',
  description: 'AMX UAV tourism and land use drone use cases',
};

export default function TourismPage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="tourism" />
      <div className="case-grid">
        
        {/* Land Use Mapping */}
        <div className="case-item">
          <h3 className="project-title">Land Use Mapping</h3>
          <img 
            src="/img/Use Case - Land Use.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Land Use Mapping"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Yogyakarta, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>150Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>180m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Vertic</td></tr>
              <tr className="stat-item"><th>GSD</th><td>5cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Virtual Reality Tourism */}
        <div className="case-item">
          <h3 className="project-title">Virtual Reality Tourism</h3>
          <img 
            src="/img/Use Case - Virtual Reality.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Virtual Reality Tourism"
          />
          <table className="case-stats-table case-stats-grid">
            <tbody>
              <tr className="stat-item"><th>Location</th><td>Bali, Indonesia</td></tr>
              <tr className="stat-item"><th>Total Area</th><td>80Ha</td></tr>
              <tr className="stat-item"><th>Altitude</th><td>120m</td></tr>
              <tr className="stat-item"><th>Drone</th><td>AMX Octopter</td></tr>
              <tr className="stat-item"><th>GSD</th><td>3cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}