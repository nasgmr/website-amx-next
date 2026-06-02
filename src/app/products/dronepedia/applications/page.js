import DronepediaSubNav from '../../../../components/DronepediaSubNav';

export const metadata = {
  title: 'Dronepedia - Applications | AMX UAV',
  description: 'Learn about various drone applications by AMX UAV.',
};

export default function ApplicationsPage() {
  return (
    <main className="use-case-container">
      {/* Dronepedia Sub Navigation */}
      <DronepediaSubNav active="applications" />

      <div className="dronepedia-content">
        <div className="applications-grid">
          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/aerial videography & photography.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="aerial videography & photography" className="app-img-box" />
            <div className="app-title-box">
              <h3>Aerial Videography & Photography</h3>
            </div>
          </div>

          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/land mapped.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="land mapping" className="app-img-box" />
            <div className="app-title-box">
              <h3>Land Mapping</h3>
            </div>
          </div>

          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/agriculture & environment management.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="agriculture & environment management" className="app-img-box" />
            <div className="app-title-box">
              <h3>Agriculture & Environment Management</h3>
            </div>
          </div>

          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/construction & engineer planning.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="construction & engineering planning" className="app-img-box" />
            <div className="app-title-box">
              <h3>Construction & Engineering Planning</h3>
            </div>
          </div>

          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/disaster management.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="disaster management" className="app-img-box" />
            <div className="app-title-box">
              <h3>Disaster Management</h3>
            </div>
          </div>

          <div className="app-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/education & hobby.png" style={{ width: '100%', height: '220px', objectFit: 'contain', objectPosition: 'center' }} alt="education & hobby" className="app-img-box" />
            <div className="app-title-box">
              <h3>Education & Hobby</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}