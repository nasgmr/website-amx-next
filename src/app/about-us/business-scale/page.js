export const metadata = {
  title: 'Business Scale Overview - AMX UAV',
  description: 'AMX UAV Technologies business scale, flight hours, and operational statistics',
};

export default function BusinessScalePage() {
  return (
    <main className="use-case-container scale-container">
      <div className="use-case-header-section scale-header">
        <h1 className="category-main-title">BUSINESS SCALE OVERVIEW</h1>
      </div>

      <div className="scale-stats-grid">
        <div className="stat-box">
          <img src="/img/fixed-wing - products.png" style={{ width: '110px', height: '110px' }} alt="fixed-wing - products" />
          <h2>5</h2>
          <p>Fixed-Wing</p>
        </div>

        <div className="stat-box">
          <img src="/img/multicopter - products.png" style={{ width: '110px', height: '110px' }} alt="multicopter - products" />
          <h2>10</h2>
          <p>Multicopter</p>
        </div>

        <div className="stat-box">
          <img src="/img/vtol - products.png" style={{ width: '110px', height: '110px' }} alt="VTOL - products" />
          <h2>10</h2>
          <p>VTOL</p>
        </div>

        <div className="stat-box">
          <img src="/img/land mapped.png" style={{ width: '110px', height: '110px' }} alt="land-mapped - products" />
          <h2>20.000Ha</h2>
          <p>Land Mapped</p>
        </div>

        <div className="stat-box">
          <img src="/img/trained engineer.png" style={{ width: '110px', height: '110px' }} alt="engineer - products" />
          <h2>10</h2>
          <p>Trained Engineer</p>
        </div>

        <div className="stat-box">
          <img src="/img/qualified pilot.png" style={{ width: '110px', height: '110px' }} alt="pilot - products" />
          <h2>2</h2>
          <p>Qualified Pilot</p>
        </div>

        <div className="stat-box">
          <img src="/img/intellectual prop.png" style={{ width: '110px', height: '110px' }} alt="land-surveyed - products" />
          <h2>14</h2>
          <p>Intellectual Prop</p>
        </div>

        <div className="stat-box">
          <img src="/img/flight hours.png" style={{ width: '110px', height: '110px' }} alt="flight-hours - products" />
          <h2>1000+</h2>
          <p>Flight Hours</p>
        </div>

        <div className="stat-box">
          <img src="/img/annual revenue.png" style={{ width: '110px', height: '110px' }} alt="revenue - products" />
          <h2>400%</h2>
          <p>Annual Revenue</p>
        </div>
      </div>
    </main>
  );
}