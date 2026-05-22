import UseCaseSubNav from '../../../components/UseCaseSubNav';
export const metadata = {
  title: 'Use Case - Tourism & Mining | AMX UAV',
  description: 'AMX UAV tourism promotion and mining site inventory use cases',
};
export default function TourismPage() {
  return (
    <main className="use-case-container">
      <UseCaseSubNav active="tourism" />
      <div className="case-grid">

        {/* Virtual Reality For Tourism Promotion */}
        <div className="case-item">
          <h3 className="project-title">Virtual Reality For Tourism Promotion</h3>
          <img 
            src="/img/Use Case - Virtual Reality.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Virtual Reality For Tourism Promotion"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Flores, Indonesia</td></tr>
              <tr><th>Total Area</th><td>1000Ha</td></tr>
              <tr><th>Altitude</th><td>200m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>7cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

        {/* Nickel Mine Site Inventory */}
        <div className="case-item">
          <h3 className="project-title">Nickel Mine Site Inventory</h3>
          <img 
            src="/img/Use Case - Nickel Mine.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Nickel Mine Site Inventory"
          />
          <table className="case-stats-table">
            <tbody>
              <tr><th>Location</th><td>Kolaka, Indonesia</td></tr>
              <tr><th>Total Area</th><td>7000Ha</td></tr>
              <tr><th>Altitude</th><td>250m</td></tr>
              <tr><th>Drone</th><td>AMX Vertic</td></tr>
              <tr><th>GSD</th><td>7cm/pixel</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}