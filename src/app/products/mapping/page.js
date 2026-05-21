import ProductsSubNav from '../../../components/ProductsSubNav';

export const metadata = {
  title: 'Mapping Products - AMX UAV',
};

export default function MappingPage() {
  return (
    <main className="products-container">
      <ProductsSubNav active="mapping" />

      <section className="product-list">
        <div className="product-card">
          <div className="product-image-box"><p>FOTO PRODUK</p></div>
          <div className="product-info">
            <h4 className="product-category">Compact eVTOL Drone</h4>
            <h1 className="product-title" style={{ fontWeight: 525 }}>VERTIC AIR</h1>
            <p>Vertic Air is easy to control, fully autonomous, and capable to operate from narrow vertical take off-landing (VTOL) mapping drone. Vertic air is ready for various application such as agriculture, asset monitoring, construction and engineering planning, and military surveillance.</p>
            <div className="product-buttons-container">
              <a href="/products/mapping/vertic-air" className="btn-learn-more-products">Click Here For More</a>
              <a href="https://katalog.inaproc.id/amx-uav-technologies/drone-pemetaan-evtol-vertic-air" target="_blank" rel="noopener noreferrer" className="btn-shop">See Product</a>
            </div>
          </div>
        </div>

        <div className="product-card row-reverse">
          <div className="product-image-box"><p>FOTO PRODUK</p></div>
          <div className="product-info">
            <h4 className="product-category">Multipurpose eVTOL Drone</h4>
            <h1 className="product-title" style={{ fontWeight: 525 }}>VERTIC XL</h1>
            <p>Vertic is quad tail-sitter vertical take off-landing (VTOL) mapping drone that easy to control, fully autonomous, and capable operate from narrow site. Vertic is ready for various application such as agriculture, urban planning, plantation, mining, forestry, and oil and gas.</p>
            <a href="/products/mapping/vertic-xl" className="btn-learn-more-products">Click Here For More</a>
          </div>
        </div>
      </section>

      <section className="drone-usage-section">
        <h1 className="usage-title">HOW TO USE DRONE TECHNOLOGY?</h1>
        <p className="usage-subtitle">AMX UAV offer 2 options for using Drone technology:</p>
        <div className="usage-options">
          <div className="usage-box">
            <h4 className="content-subtitle">Buy and Operate UAV/Drones Independently</h4>
            <ul className="content-list">
              <li>Suitable for objects that need updates periodically: Agriculture/plantation/forestry monitoring, Media reportation (video/picture), Construction/Infrastructure project report, Survey and disaster mitigation</li>
              <li>Accumulatively, for the long term costs UAV/Drone team production (operational, maintenance, etc.) more economical</li>
              <li>AMX UAV ready to be your partner for UAV sales, operator training, and maintenance</li>
            </ul>
          </div>
          <div className="usage-box">
            <h4 className="content-subtitle">Utilize AMX UAV Professional Services</h4>
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