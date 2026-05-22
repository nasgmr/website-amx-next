import UseCaseSubNav from '../../../components/UseCaseSubNav';
export const metadata = {
  title: 'Use Case - Infrastructure | AMX UAV',
  description: 'AMX UAV infrastructure monitoring and planning drone use cases',
};
export default function InfrastructurePage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="infrastructure" />
      <div className="case-grid">

        {/* Land Use and Industrial Site Planning */}
        <div className="case-item">
          <h3 className="project-title">Land Use and Industrial Site Planning</h3>
          <img 
            src="/img/Use Case - Land Use.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Land Use and Industrial Site Planning"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Batam, Indonesia</td></tr>
              <tr><th>Total Area</th><td>400Ha</td></tr>
              <tr><th>Altitude</th><td>200m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>7cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Gas Pipeline Planning */}
        <div className="case-item">
          <h3 className="project-title">Gas Pipeline Planning</h3>
          <img 
            src="/img/Use Case - Gas Pipeline.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Gas Pipeline Planning"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Kalimantan, Indonesia</td></tr>
              <tr><th>Total Area</th><td>36Km</td></tr>
              <tr><th>Altitude</th><td>300m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>9cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}