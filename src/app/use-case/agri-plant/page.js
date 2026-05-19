import UseCaseSubNav from '../../../components/UseCaseSubNav';

export const metadata = {
  title: 'Use Case - Agriculture & Plantation | AMX UAV',
  description: 'AMX UAV agriculture and plantation drone use cases',
};

export default function AgriPlantPage() {
  return (
    <main className="use-case-container">
      {/* Memanggil sub-navigasi statis dengan penanda active "agri-plant" */}
      <UseCaseSubNav active="agri-plant" />

      {/* Grid Konten Utama */}
      <div className="case-grid">
        
        {/* Item 1: Soil Nutrient Estimation */}
        <div className="case-item">
          <h3 className="project-title">Soil Nutrient Estimation</h3>
          <img 
            src="/img/Use Case - Soil Nutrient.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Nutrient Estimation"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Magelang, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>500Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>200m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>6cm/pixel</span></div>
          </div>
        </div>

        {/* Item 2: Soil Moisture Estimation */}
        <div className="case-item">
          <h3 className="project-title">Soil Moisture Estimation</h3>
          <img 
            src="/img/Use Case - Soil Moisture.png" 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '8px auto 30px auto', borderRadius: '8px' }} 
            alt="Soil Moisture Estimation"
          />
          <div className="case-stats-grid">
            <div className="stat-item"><label>Location</label><span>Java, Indonesia</span></div>
            <div className="stat-item"><label>Total Area</label><span>200Ha</span></div>
            <div className="stat-item"><label>Altitude</label><span>200m</span></div>
            <div className="stat-item"><label>Drone</label><span>AMX Vertic</span></div>
            <div className="stat-item"><label>GSD</label><span>6cm/pixel</span></div>
          </div>
        </div>

      </div>
    </main>
  );
}