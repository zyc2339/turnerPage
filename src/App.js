import "./App.css";
import Page1 from "./component/page1/page1";
import Page2 from "./component/page2/page2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route exact path="/" element={<Page1 />} />

          <Route path="/insurance" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
