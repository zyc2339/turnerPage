import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Footer from "../page1/Footer";
import Header from "../page1/Header";

export default function Page2() {
  return (
    <>
      <div className="page-body-grid">
        <div className="page2-body-grid-item page2-section1">
          <Header />
          <div className="page2-body-grid-item1-card">
            <h1>Get A Personalised Quote In Under 5 Minutes</h1>
            <p>
              We know time is a valuable commodity to you. Our aim is to reduce
              the time you spend on life’s paperwork so you can focus on the
              action.
            </p>
            <button>MAKE A CLAIM</button>
            <button>GET A QUOTE</button>
          </div>
        </div>
        <div className="page2-body-grid-item page2-section2">
          <div className="service-introduction">
            <h2>Choose The Right Plan For You</h2>
          </div>
        </div>

        <div className="page2-body-grid-item page2-section3">
          <div className="page2-section3-card">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
