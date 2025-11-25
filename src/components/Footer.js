import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2 className="footer-logo">Smart Finds Shop</h2>
          <p className="footer-desc">
            Handpicked Amazon deals curated to save you time & money.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/category/tech">Tech</Link>
          <Link to="/category/beauty">Beauty</Link>
          <Link to="/category/kitchen">Kitchen</Link>
          <Link to="/category/health">Health</Link>
          <Link to="/category/baby">Baby</Link>
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>

        </div>

        {/* RIGHT SECTION */}
        <div className="footer-disclaimer">
          <h4>Affiliate Disclaimer</h4>
          <p>
            As an Amazon Associate, we may earn commissions from qualifying
            purchases. This helps support our website at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Smart Finds Shop • All Rights Reserved
      </div>
    </footer>
  );
}
