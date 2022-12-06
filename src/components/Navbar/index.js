import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>
          <span>Give</span>Boost
        </h1>
      </div>

      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/" className="btn-navbar">
              Home
            </a>
          </li>
          <li>
            <a href="#successful">Successful Marketing</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="#socialMetrics">Social Metrics</a>
          </li>
        </ul>
      </div>

      <div className="navbar-button">
        <button>Free Analysis</button>
      </div>
    </div>
  );
}
