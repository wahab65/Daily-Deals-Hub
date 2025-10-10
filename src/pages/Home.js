// src/pages/Home.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 10));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Top Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#333",
          padding: "1rem 0",
          marginBottom: "1.5rem",
        }}
      >
        <a href="#" style={{ color: "#fff", textDecoration: "none", margin: "0 1.5rem" }}>Home</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", margin: "0 1.5rem" }}>Products</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", margin: "0 1.5rem" }}>Contact</a>
      </nav>

      {/* Header Section with Blue Background */}
      <header
        style={{
          backgroundColor: "#1a73e8",
          color: "#fff",
          padding: "4rem 2rem 2rem 2rem",
          textAlign: "center",
          borderRadius: "0 0 20px 20px",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Daily Amazon Deals</h1>
        <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0", fontWeight: "normal" }}>
          We choose the best products for you
        </h3>
      </header>

      {/* Paragraph Bubble */}
      <div
        style={{
          backgroundColor: "#FFEB3B",
          color: "#333",
          padding: "1.5rem",
          borderRadius: "20px",
          maxWidth: "650px",
          margin: "1rem auto 3rem auto",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        At Daily Amazon Deals, we handpick the most amazing products from Amazon so you don't have to search endlessly. 
        From trending gadgets and tech to lifestyle essentials, we focus on quality, value, and popularity. 
        Our goal is to make your shopping experience effortless, so you can enjoy the best products every day. 
        Browse our featured picks and discover something new that you'll love!
      </div>

      {/* Featured Products */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem 3rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333", textAlign: "center" }}>
          Featured Products
        </h2>

        {products.length === 0 ? (
          <p style={{ textAlign: "center" }}>Loading products...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                style={{
                  display: "block",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#333",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{p.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f1f1f1",
          padding: "2rem 1rem",
          marginTop: "3rem",
          textAlign: "center",
          color: "#333",
          borderTop: "1px solid #ddd",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "#1a73e8" }}>Daily Amazon Deals</h3>
          <p style={{ margin: "0.5rem 0", fontSize: "0.95rem", lineHeight: "1.5" }}>
            Discover the best deals, hand-picked daily. We curate top-rated products to help you
            shop smarter and save more every day.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a href="#" style={{ color: "#555", textDecoration: "none" }}>About</a>
            <a href="#" style={{ color: "#555", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#555", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ color: "#555", textDecoration: "none" }}>Contact</a>
          </div>

          <hr style={{ margin: "1.5rem 0", border: "none", borderTop: "1px solid #ddd" }} />

          <p style={{ margin: "0.5rem 0", fontWeight: "bold", fontSize: "0.9rem" }}>
            © 2025 Daily Amazon Deals. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
