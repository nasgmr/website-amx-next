export const metadata = {
  title: 'Vertic XL - AMX UAV',
  description: 'Vertic XL is a quad tail-sitter VTOL mapping drone, fully autonomous and capable of operating from narrow sites.',
};

export default function VerticXLPage() {
  return (
    <main className="detail-container">
      <section className="detail-header">
        <h4 className="product-category">Multipurpose eVTOL Drone</h4>
        <h1 className="product-title">VERTIC XL</h1>
      </section>

      <div className="detail-grid">
        <div className="detail-image-box">
          <p>FOTO PRODUK VERTIC XL</p>
        </div>

        <div className="detail-description">
          <p>
            Vertic XL is quad tail-sitter vertical take off-landing (VTOL) mapping drone that easy to control, fully autonomous, and capable operate from narrow site. Vertic is ready for various application such as agriculture, urban planning, plantation, mining, forestry, and oil & gas.
          </p>

          <div className="specs-grid">
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Dimension</h4>
              <ul>
                <li>Wingspan: 2400 mm</li>
                <li>Weight: 7500 gr</li>
              </ul>
            </div>
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Material</h4>
              <p>Fiber Composites</p>
            </div>
            <div className="spec-item full-width">
              <h4 style={{ color: '#000000' }}>More Details</h4>
              <ul>
                <li>Payload: 1000 Grams</li>
                <li>Flight Time: 70 Minutes</li>
                <li>Mapping Area: 600 Ha</li>
                <li>Cruise Speed: 19m/s</li>
                <li>Flight Range: 65KM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="additional-info">
        <div className="info-box">
          <h4 style={{ color: '#000000' }}>Mapping Payloads</h4>
          <ul>
            <li>Map 24 RGB Camera</li>
            <li>RedEdge-P Multispectral Camera</li>
            <li>ADTi 26S V2 RGB Camera</li>
            <li>ILX-LRI RGB Camera</li>
            <li>Surveyor Ultra Lidar</li>
          </ul>
        </div>

        <div className="info-box">
          <h4 style={{ color: '#000000' }}>Surveillance Payloads</h4>
          <ul>
            <li>M3-D Surveillance Camera</li>
            <li>IR Surveillance Camera</li>
          </ul>
        </div>
      </section>
    </main>
  );
}