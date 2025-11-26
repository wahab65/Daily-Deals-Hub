
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";
import "./Home.css";
import Navbar from "../components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 8));
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="home-container">

      <Navbar />
      {/* HERO INTRO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <h1 className="hero-title">HANDPICKED AMAZON DEALS</h1>

          {/* IMAGE BELOW HEADING */}
          <img
            src="/amazon-main.png"
            alt="Amazon Deals Illustration"
            className="hero-img-illustration"
          />

          <p className="hero-subtitle">Find the Right Products, All in One Place</p>

          <p className="hero-description">
            We find the best Amazon products, compare reviews, and only feature items
            that deliver real value — so you don’t waste time scrolling. Explore our
            curated categories and discover items worth your money.
          </p>

          <a className="shop-btn">
            SHOP NOW
          </a>
        </div>
      </section>



      {/* CATEGORIES SECTION */}
      <section className="categories-section">
        <h2>Shop by Category</h2>

        <div className="categories-grid">

          <Link to="/category/tech" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/tech.jpg" alt="Tech" />
            </div>
            <p>Tech</p>
          </Link>

          <Link to="/category/beauty" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/beauty.jpg" alt="Beauty" />
            </div>
            <p>Beauty</p>
          </Link>

          <Link to="/category/kitchen" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/kitchen.jpg" alt="Kitchen" />
            </div>
            <p>Kitchen</p>
          </Link>

          <Link to="/category/baby" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/baby.jpg" alt="Baby & Kids" />
            </div>
            <p>Baby & Kids</p>
          </Link>

          <Link to="/category/health" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/health.jpg" alt="Health" />
            </div>
            <p>Health & Lifestyle</p>
          </Link>

        </div>
      </section>

      {/* TOP PICKS SECTION */}
      <section className="toppicks-section">
        <h2>Top Picks</h2>

        <div className="products-grid">
          {products.length === 0 ? (
            <p>Loading top picks...</p>
          ) : (
            products.slice(0, 15).map((p) => (
              <div key={p.slug} className="product-card">

                <Link to={`/products/${p.slug}`} className="product-card-top">
                  {p.imageUrl && (
                    <div className="product-image-wrapper">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="product-image"
                      />
                    </div>
                  )}
                  <h3 className="product-card-title">{p.name}</h3>
                </Link>

                <a
                  href={p.affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buy-btn-home"
                >
                  Buy on Amazon
                </a>
                <p className="home-card-disclaimer">
  This post contains affiliate links.
</p>
              </div>
            ))
          )}
        </div>

      </section>



    </div>
  );
}
