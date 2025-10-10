import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";

function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      const found = data.find((p) => p.slug === slug);
      setProduct(found);

      // Auto redirect with 1-second delay
      if (found && found.affiliate_link) {
        setTimeout(() => {
          window.location.href = found.affiliate_link;
        }, 1000);
      }
    });
  }, [slug]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#1a73e8",
          color: "#fff",
          padding: "3rem 2rem 2rem 2rem",
          textAlign: "center",
          borderRadius: "0 0 20px 20px",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>{product.name}</h1>
      </header>

      {/* Product Info in Yellow Bubble */}
      <div
        style={{
          backgroundColor: "#FFEB3B",
          color: "#333",
          padding: "2rem",
          borderRadius: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        <p>
          {product.description ||
            "This product is one of our top recommendations for quality and value. " +
            "We handpick the best Amazon products every day to make your shopping experience effortless. " +
            "Click the button below to grab it now!"}
        </p>

        {/* Affiliate disclosure */}
        <p style={{ marginTop: "1rem", fontStyle: "italic", fontSize: "0.9rem", color: "#444" }}>
          This post contains affiliate links.
        </p>

        {/* Amazon Button */}
        {product.affiliate_link && (
          <a
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              backgroundColor: "#ff9900",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e68a00")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9900")}
          >
            Buy on Amazon →
          </a>
        )}

        <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.9rem" }}>
          If you weren’t redirected automatically, click the button above to view this product on Amazon.
        </p>
      </div>
    </div>
  );
}

export default Product;
