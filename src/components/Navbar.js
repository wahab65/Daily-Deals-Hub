// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../pages/Home.css"

export default function Navbar() {
  return (
    <>
      {/* Disclosure Bar */}
      <div className="disclosure-bar">
        We independently review everything we recommend. When you buy through our links, we may earn a commission.
        <span className="learn-more"> Learn more</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/mobile-shopping.png" alt="Logo" className="logo" />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/beauty">Beauty</Link></li>
          <li><Link to="/category/health">Health & Lifestyle</Link></li>
          <li><Link to="/category/kitchen">Kitchen</Link></li>
          <li><Link to="/category/baby">Baby & Kids</Link></li>
          <li><Link to="/category/tech">Tech</Link></li>
          <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
</li>
          {/* add other static pages if you have them */}
        </ul>

        <div className="nav-right">
          <input
            type="text"
            placeholder="Search products..."
            className="search-box"
          />
          <div className="profile-icon">👤</div>
        </div>
      </nav>
    </>
  );
}
