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
        <div className="pdf-style-grid">
          
          {/* Left Column */}
          <div className="grid-col-left">
            {/* Manual Mode */}
            <div className="mode-card">
              <div className="mode-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/manual mode.png" alt="Manual Mode" />
              </div>
              <div className="mode-info">
                <h3>Manual Mode</h3>
                <p>Pilot/Operator directly control the aircraft through radio controller without sensors and flight controller assistant.</p>
              </div>
            </div>

            {/* Assisted Mode */}
            <div className="mode-card">
              <div className="mode-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/assisted mode.png" alt="Assisted Mode" />
              </div>
              <div className="mode-info">
                <h3>Assisted Mode</h3>
                <p>Pilot/Operator directly control the aircraft through radio controller with sensors and flight controller assistant for flight stabilization.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid-col-right">
            {/* Automatic Mode */}
            <div className="mode-card auto-card">
              <div className="mode-img-box auto-img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/automatic mode.png" alt="Automatic Mode" className="large-img" />
              </div>
              <div className="mode-info auto-info">
                <h3>Automatic Mode</h3>
                <p>Drone controlled by onboard flight controller & sensors. The mission data was entered by operator, then drone can fly autonomously. While flying, operator can monitor and change the mission parameter through GCS. In emergency condition, operator can take over the drone control (manual/assisted mode).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}