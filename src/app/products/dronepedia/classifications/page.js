import DronepediaSubNav from '../../../../components/DronepediaSubNav';

export const metadata = {
  title: 'Dronepedia - Classifications | AMX UAV',
  description: 'Comparison and classification of drone types including Fixed Wing, Rotary Wing, and Hybrid VTOL.',
};

export default function ClassificationsPage() {
  return (
    <main className="use-case-container">
      {/* Dronepedia Sub Navigation */}
      <DronepediaSubNav active="classifications" />

      <div className="dronepedia-content">
        <div className="comparison-grid">
          {/* Fixed Wing */}
          <div className="drone-type-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/fixed-wing.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="fixed wing drone" className="drone-img-box" />
            <div className="drone-info">
              <h3>Fixed Wing</h3>
              <div className="pros-cons-box">
                <h4 className="pros-title"><i className="fa-solid fa-plus"></i> Advantages</h4>
                <ul>
                  <li>More flight time compared to rotary wing & hybrid</li>
                  <li>Wide coverage</li>
                  <li>Gliding capability (more safety)</li>
                  <li>High speed</li>
                </ul>
              </div>
              <div className="pros-cons-box">
                <h4 className="cons-title"><i className="fa-solid fa-minus"></i> Disadvantages</h4>
                <ul>
                  <li>Wide area for take-off & landing needs</li>
                  <li>Can&apos;t hovering</li>
                  <li>Special skills needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rotary Wing */}
          <div className="drone-type-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/multicopter.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="rotary wing drone" className="drone-img-box" />
            <div className="drone-info">
              <h3>Rotary Wing</h3>
              <div className="pros-cons-box">
                <h4 className="pros-title"><i className="fa-solid fa-plus"></i> Advantages</h4>
                <ul>
                  <li>Can hovering (hold position)</li>
                  <li>Move to any direction (3D)</li>
                  <li>Easier control than fixed wing</li>
                  <li>Take-off & landing from limited space</li>
                </ul>
              </div>
              <div className="pros-cons-box">
                <h4 className="cons-title"><i className="fa-solid fa-minus"></i> Disadvantages</h4>
                <ul>
                  <li>Limited flight time compared to fixed wing and hybrid</li>
                  <li>Limited coverage</li>
                  <li>If there is rotor malfunction, no gliding capability</li>
                  <li>Low speed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hybrid VTOL */}
          <div className="drone-type-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/vtol.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="hybrid vtol drone" className="drone-img-box" />
            <div className="drone-info">
              <h3>Hybrid VTOL</h3>
              <div className="pros-cons-box">
                <h4 className="pros-title"><i className="fa-solid fa-plus"></i> Advantages</h4>
                <ul>
                  <li>Easier control than fixed wing</li>
                  <li>More flight time than rotary wing</li>
                  <li>Wider coverage than rotary wing</li>
                  <li>Glide Capability</li>
                </ul>
              </div>
              <div className="pros-cons-box">
                <h4 className="cons-title"><i className="fa-solid fa-minus"></i> Disadvantages</h4>
                <ul>
                  <li>Limited flight time compared to fixed wing</li>
                  <li>Higher price compared than fixed wing and rotary wing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}