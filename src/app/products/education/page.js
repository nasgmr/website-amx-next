import ProductsSubNav from '../../../components/ProductsSubNav';

export const metadata = {
  title: 'Education Products - AMX UAV',
};

export default function EducationPage() {
  return (
    <main className="products-container">
      <ProductsSubNav active="education" />

      <section className="product-list">
        <div className="product-card">
          <div className="product-image-box"><p>FOTO PRODUK</p></div>
          <div className="product-info">
            <h4 className="product-category">DIY Drone for Students and Hobbyist</h4>
            <h1 className="product-title" style={{ fontWeight: 525 }}>QUBIT</h1>
            <p>Qubit is a mini quad copter type drone. Design for students (10 years+) and drone hobbyist. Perfect for learn how to build, coding, and operate a drone.</p>
            <a href="/products/education/qubit" className="btn-learn-more-products">Click Here For More</a>
          </div>
        </div>
      </section>

      <section className="drone-usage-section">
        <h1 className="usage-title">HOW TO USE DRONE TECHNOLOGY?</h1>
        <p className="usage-subtitle">AMX UAV offer 2 options for using Drone technology:</p>
        <div className="usage-options">
          <div className="usage-box">
            <h4 className="content-subtitle-1">Buy and Operate UAV/Drones Independently</h4>
            <ul className="content-list">
              <li>Suitable for objects that need updates periodically: Agriculture/plantation/forestry monitoring, Media reportation (video/picture), Construction/Infrastructure project report, Survey and disaster mitigation</li>
              <li>Accumulatively, for the long term costs UAV/Drone team production (operational, maintenance, etc.) more economical</li>
              <li>AMX UAV ready to be your partner for UAV sales, operator training, and maintenance</li>
            </ul>
          </div>
          <div className="usage-box">
            <h4 className="content-subtitle-1">Utilize AMX UAV Professional Services</h4>
            <ul className="content-list">
              <li>Suitable for objects that don&apos;t need high intensity updates</li>
              <li>Documentation and sites/building modeling</li>
              <li>Profile and area planning, Event documentation, Advertisement</li>
              <li>There is no routine cost for the UAV/Drone team when not producing</li>
              <li>Integrated data processing and editing</li>
              <li>AMX UAV experience for the best results</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}