export const metadata = {
  title: 'Partners & Clients - AMX UAV',
  description: 'AMX UAV Technologies trusted partners and clients',
};

export default function PartnersClientsPage() {
  return (
    <main className="use-case-container partners-container">
      <div className="use-case-header-section partners-header">
        <h1 className="category-main-title">PARTNERS & CLIENTS</h1>
      </div>

      <div className="partners-grid">
        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-ugm.png" alt="UGM Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>UGM</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-brin.png" alt="BRIN Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>BRIN</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-kemdikbud.png" alt="KEMDIKBUD Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>KEMDIKBUD</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-big.png" alt="BIG Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>BIG</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-beehive.png" alt="Beehive Drone Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>BEEHIVE DRONE</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-mitrageotama.png" alt="Mitra Geotama Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>MITRA GEOTAMA</h4>
        </div>

        <div className="partner-card">
          <div className="partner-logo-box">
            <img src="/img/logo-tni.png" alt="TNI AU Logo" />
          </div>
          <h4 style={{ fontSize: '16px', color: '#FFFFFF' }}>TNI AU</h4>
        </div>
      </div>
    </main>
  );
}