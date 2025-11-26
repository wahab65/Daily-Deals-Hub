// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { fetchProducts } from "../utils/sheetApi";

// function Product() {
//   const { slug } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts().then((data) => {
//       const found = data.find((p) => p.slug === slug);
//       setProduct(found);
//     });
//   }, [slug]);

//   if (!product) return <div style={{ textAlign: "center", padding: "2rem" }}>Loading product...</div>;

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
//       <Link to="/products" style={{ display: "inline-block", marginBottom: "1rem", color: "#1a73e8" }}>
//         ← Back to All Products
//       </Link>

//       <header style={{
//         backgroundColor: "#1a73e8",
//         color: "#fff",
//         padding: "3rem 2rem 2rem 2rem",
//         textAlign: "center",
//         borderRadius: "0 0 20px 20px",
//         marginBottom: "1.5rem",
//       }}>
//         <h1 style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>{product.name}</h1>
//       </header>

//       <div style={{
//         backgroundColor: "#FFEB3B",
//         color: "#333",
//         padding: "2rem",
//         borderRadius: "20px",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//         fontSize: "1.1rem",
//         lineHeight: "1.6",
//         textAlign: "center",
//       }}>
//         <p>{product.description || "This product is one of our top recommendations. Click below to buy!"}</p>

//         <p style={{ marginTop: "1rem", fontStyle: "italic", fontSize: "0.9rem", color: "#444" }}>
//           As an Amazon Associate, I earn from qualifying purchases.
//         </p>

//         {product.affiliate_link && (
//           <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer"
//              style={{
//                display: "inline-block",
//                marginTop: "1.5rem",
//                backgroundColor: "#ff9900",
//                color: "#fff",
//                padding: "0.8rem 1.5rem",
//                borderRadius: "6px",
//                textDecoration: "none",
//                fontWeight: "bold",
//              }}>
//             Buy on Amazon →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Product;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";
import Navbar from "../components/Navbar";
import "./Product.css";

function capitalize(word = "") {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((all) => {
        const found = all.find((p) => p.slug === slug);
        setProduct(found || null);

        if (found) {
          const sameCategory = all.filter(
            (p) =>
              p.slug !== found.slug &&
              (p.category || "").toLowerCase() ===
              (found.category || "").toLowerCase()
          );
          setRelated(sameCategory.slice(0, 4)); // up to 4 related items
        } else {
          setRelated([]);
        }
      })
      .catch((err) => {
        console.error("Error loading product:", err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="product-page">
        <Navbar />
        <div className="product-loading">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-page">
        <Navbar />
        <div className="product-not-found">
          <h2>Product not found</h2>
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const categoryLabel =
    product.category && product.category !== "uncategorized"
      ? capitalize(product.category)
      : "Uncategorized";

  return (
    <div className="product-page">
      <Navbar />

      {/* MAIN PRODUCT SECTION */}
      <section className="product-main">
        <div className="product-main-inner">
          {/* Image side */}
          <div className="product-main-image">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} />
            ) : (
              <div className="product-image-placeholder">
                No image available
              </div>
            )}
          </div>

          {/* Info side */}
          <div className="product-main-info">
            <p className="product-category">
              Category{" "}
              <span className="product-category-label">{categoryLabel}</span>
            </p>

            <h1 className="product-title">{product.name}</h1>

            <a
              href={product.affiliate_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flashy-buy-btn"
            >
              CLICK HERE TO BUY ON AMAZON
            </a>
            <br></br>

            <div className="affiliate-disclaimer-box">
              <p>
                <span className="icon">ℹ️</span>
                This post contains affiliate links. If you click through and make a purchase,
                I may earn a commission at no additional cost to you.
              </p>
            </div>



            {product.description && (
              <p className="product-description">{product.description}</p>
            )}

            {/* Extra trust / highlight section */}
            <div className="product-highlights">
              <h3>Why we picked this</h3>
              <ul>
                <li>Curated from highly rated Amazon products.</li>
                <li>Good balance of price, quality, and usefulness.</li>
                <li>Verified popularity among real buyers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="related-section">
        <h2>Related products</h2>

        {related.length === 0 ? (
          <p>No related products found.</p>
        ) : (
          <div className="related-grid">
            {related.map((p) => (
              <div key={p.slug} className="related-card">
                <Link to={`/products/${p.slug}`} className="related-card-top">
                  {p.imageUrl && (
                    <div className="related-image-wrap">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="related-image"
                      />
                    </div>
                  )}
                  <h3 className="related-title">{p.name}</h3>
                </Link>

                <a
                  href={p.affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="related-buy-btn"
                >
                  Buy on Amazon
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

