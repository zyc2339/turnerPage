export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <ul>
          <li>CARS</li>
          <li>Trucks and Machinery</li>
          <li>Damaged and End of Life</li>
          <li>Boats and Marine</li>
          <li>Motorcycles and Scooters</li>
          <li>Buses, Caravans and Motorhomes</li>
          <li>General Goods</li>
        </ul>
      </div>
      <div className="header-navbar">
        <img src="../../image/logo.png" />
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Insure</li>

            <li className="login-area">
              <input type="text" placeholder="SEARCH" />

              <button className="btn-login">LOG IN</button>

              <button className="btn-signup">SIGN UP</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
