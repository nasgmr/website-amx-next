import DronepediaSubNav from '../../../../components/DronepediaSubNav';

export const metadata = {
  title: 'Dronepedia - How It Works | AMX UAV',
  description: 'Learn how drones work, including manual, assisted, and automatic flight modes.',
};

export default function HowItWorksPage() {
  return (
    <main className="use-case-container">
      <DronepediaSubNav active="how-it-works" />

      <div className="dronepedia-content">
        <div 
          className="pdf-style-grid" 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch' }}
        >
          {/* Left Column */}
          <div className="grid-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Manual Mode */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/manual mode.png" style={{ width: '100%', height: '180px', objectFit: 'contain' }} alt="Manual Mode" />
              </div>
              <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', flexGrow: 1 }}>
                <h3 style={{ color: '#DADEDF', margin: '0 0 10px 0', fontSize: '18px', textTransform: 'uppercase' }}>Manual Mode</h3>
                <p style={{ color: '#CCCCCC', fontSize: '14px', lineHeight: '1.5', margin: 0, textAlign: 'justify' }}>Pilot/Operator directly control the aircraft through radio controller without sensors and flight controller assistant.</p>
              </div>
            </div>

            {/* Assisted Mode */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/assisted mode.png" style={{ width: '100%', height: '180px', objectFit: 'contain' }} alt="Assisted Mode" />
              </div>
              <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', flexGrow: 1 }}>
                <h3 style={{ color: '#DADEDF', margin: '0 0 10px 0', fontSize: '18px', textTransform: 'uppercase' }}>Assisted Mode</h3>
                <p style={{ color: '#CCCCCC', fontSize: '14px', lineHeight: '1.5', margin: 0, textAlign: 'justify' }}>Pilot/Operator directly control the aircraft through radio controller with sensors and flight controller assistant for flight stabilization.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid-col-right" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/automatic mode.png" style={{ width: '100%', maxHeight: '380px', objectFit: 'contain' }} alt="Automatic Mode" />
              </div>
              <div style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', minHeight: '180px' }}>
                <h3 style={{ color: '#DADEDF', margin: '0 0 10px 0', fontSize: '18px', textTransform: 'uppercase' }}>Automatic Mode</h3>
                <p style={{ color: '#CCCCCC', fontSize: '14px', lineHeight: '1.5', margin: 0, textAlign: 'justify' }}>Drone controlled by onboard flight controller & sensors. The mission data was entered by operator, then drone can fly autonomously. While flying, operator can monitor and change the mission parameter through GCS. In emergency condition, operator can take over the drone control (manual/assisted mode).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}