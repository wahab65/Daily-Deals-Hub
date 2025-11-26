import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Disclosure Bar */}
      <div className="disclosure-bar">
        We independently review everything we recommend. When you buy through our
        links, we may earn a commission.
        <span className="learn-more">
          {" "}
          <Link to="/affiliate-disclosure">Learn more</Link>
        </span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <Link to="/" onClick={closeMenu}>
            <img src="/mobile-shopping.png" alt="Smart Finds Shop" className="logo" />
          </Link>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Center + Right: Links + Search/Profile */}
        <div className={`nav-center-right ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/category/tech" onClick={closeMenu}>
                Tech
              </Link>
            </li>
            <li>
              <Link to="/category/beauty" onClick={closeMenu}>
                Beauty
              </Link>
            </li>
            <li>
              <Link to="/category/kitchen" onClick={closeMenu}>
                Kitchen
              </Link>
            </li>
            <li>
              <Link to="/category/health" onClick={closeMenu}>
                Health
              </Link>
            </li>
            <li>
              <Link to="/category/baby" onClick={closeMenu}>
                Baby & Kids
              </Link>
            </li>
            <li>
              <Link to="/affiliate-disclosure" onClick={closeMenu}>
                Affiliate Disclosure
              </Link>
            </li>
          </ul>

          <div className="nav-right">
            <input
              type="text"
              placeholder="Search products..."
              className="search-box"
            />
            <div className="profile-icon">👤</div>
          </div>
        </div>
      </nav>
    </>
  );
}
