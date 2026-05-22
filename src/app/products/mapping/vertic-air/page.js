export const metadata = {
  title: 'Vertic Air - AMX UAV',
  description: 'Vertic Air is a compact eVTOL drone ready for various applications such as agriculture, asset monitoring, and military surveillance.',
};

export default function VerticAirPage() {
  return (
    <main className="detail-container">
      <section className="detail-header">
        <h4 className="product-category">Compact eVTOL Drone</h4>
        <h1 className="product-title">VERTIC AIR</h1>
      </section>

      <div className="detail-grid">
        <div className="detail-image-box">
          <p>FOTO PRODUK VERTIC AIR</p>
        </div>

        <div className="detail-description">
          <p>
            Vertic Air is easy to control, fully autonomous, and capable to operate from narrow vertical take off-landing (VTOL) mapping drone. Vertic air is ready for various application such as agriculture, asset monitoring, construction & engineering planning, and military surveillance.
          </p>
          
          <div className="specs-grid">
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Dimension</h4>
              <ul>
                <li>Wingspan: 1400 mm</li>
                <li>Length: 470 mm</li>
                <li>Height: 450 mm</li>
                <li>Weight: 2700 gr</li>
              </ul>
            </div>
            
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Battery</h4>
              <ul>
                <li>LIPO: 88WH</li>
                <li>Weight: 470 gr</li>
                <li>Charge: 1-2 Hr</li>
              </ul>
            </div>

            <div className="spec-item full-width">
              <h4 style={{ color: '#000000' }}>Material</h4>
              <ul>
                <li>Fiber Composites</li>
              </ul>
            </div>
          </div> 
        </div> 
      </div> 

      <section className="additional-info">
        <div className="info-box">
          <h4 style={{ color: '#000000' }}>Payloads</h4>
          <ul>
            <li>C1: 24MP, APS-C Sensor, 20mm Wide Lens, PPK Ready</li>
            <li>MicaSense RedEdge-P: 5.1MP Panchromatic, 5 Band</li>
            <li>ADTI 265 V2: 26MP, APS-C Sensor, 16mm Wide Lens, PPK Ready</li>
            <li>M2D: Day/IR, 6x zoom, Target Track, Stabilized</li>
          </ul>
        </div>

        <div className="info-box">
          <h4 style={{ color: '#000000' }}>Applications & Training</h4>
          <ul>
            <li>Precision Agriculture & Asset Monitoring</li>
            <li>Military Surveillance</li>
            <li>Basic Hybrid Drone Operator Training</li>
            <li>Data Processing & Analyze</li>
          </ul>
        </div>
      </section>
    </main>
  );
}