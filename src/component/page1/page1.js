import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Header from "./Header";

export default function Page1() {
  return (
    <>
      <div className="page1-body-grid">
        <div className="page1-body-grid-item page1-section1">
          <Header />
          <div className="page1-body-grid-item1-card">
            <h1>Rest assured and insure your cars with Turners</h1>
            <p>
              Decades in the NZ automotive marketplace represent a brand you can
              depend on. We know cars and we know that New Zealanders love
              driving. Trust us to give you all the freedom you deserve.
            </p>
            <button>GO TO INSURANCE</button>
            <div className="icon-container">
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
            </div>
          </div>
        </div>
        <div className="page1-body-grid-item page1-section2">
          <div className="service-introduction">
            <h2>Our Services</h2>

            <div className="service-card-container">
              <div className="service-card">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="icon1"
                  size="large"
                />
                <h4>24/7 Support</h4>
                <p>
                  Here for you 24/7. Our support team is available no matter
                  what time you’re driving.
                </p>
              </div>
              <div className="service-card">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="icon1"
                  size="large"
                />
                <h4>Affordable Prices</h4>
                <p>We’re disrupting the market with our competitive options.</p>
              </div>
              <div className="service-card">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="icon1"
                  size="large"
                />
                <h4>Nationwide Branches</h4>
                <p>
                  Across NZ - we’re here to provide localised service and
                  dependability.
                </p>
              </div>
              <div className="service-card">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="icon1"
                  size="large"
                />
                <h4>Online Management</h4>
                <p>
                  We know how customers operate, and we provide answers at the
                  click of a button.
                </p>
              </div>
              <div className="service-card">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="icon1"
                  size="large"
                />
                <h4>Trusted For Years</h4>
                <p>
                  Award winning service, available for generations of NZers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page1-body-grid-item page1-section3">
          <div className="page1-section3-card">
            <h2>
              What Our Customers <br />
              Say about us
            </h2>
            <p className="card-name">Jane Doe</p>
            <p className="card-location">Auckland, NZ</p>
            <p>
              “Buying a car was an intimidating prospect for me, let alone
              insuring one.
              <br />
              <br />
              Turners Cars offered me precise solutions and dependable,
              thoughful support throughout my car buying and insuring
              experience”.
            </p>

            <div className="icon-container">
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
              <FontAwesomeIcon icon={faShoppingBag} className="icon1" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
