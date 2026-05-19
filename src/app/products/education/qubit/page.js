export const metadata = {
  title: 'Qubit - AMX UAV',
  description: 'Qubit is a DIY drone designed for students and hobbyists. Easy to assemble, fully customizable, and perfect for learning about drone technology.',
};

export default function QubitPage() {
  return (
    <main className="detail-container">
      <section className="detail-header">
        <h4 className="product-category">DIY Drone for Students & Hobbyist</h4>
        <h1 className="product-title">QUBIT</h1>
      </section>

      <div className="detail-grid">
        <div className="detail-image-box">
          <p>FOTO PRODUK QUBIT</p>
        </div>

        <div className="detail-description">
          <p>
            Qubit is a DIY drone designed for students and hobbyists. It is easy to assemble, fully customizable, and perfect for learning about drone technology and flight dynamics.
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
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Material</h4>
              <p>Fiber Composites</p>
            </div>
            <div className="spec-item">
              <h4 style={{ color: '#000000' }}>Controller</h4>
              <p>High Precision Autopilot</p>
            </div>
            <div className="spec-item full-width">
              <h4 style={{ color: '#000000' }}>Propulsion</h4>
              <p>Brushless Motor & Carbon Propeller</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}