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

      // Auto redirect if affiliate link exists
      if (found && found.affiliate_link) {
        window.location.href = found.affiliate_link;
      }
    });
  }, [slug]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#1a73e8", marginBottom: "1rem" }}>{product.name}</h1>
      <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.6" }}>
        {product.description || "This product is one of our top recommendations for quality and value."}
      </p>

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

      <p style={{ marginTop: "1rem", color: "#666", fontSize: "0.9rem" }}>
        If you weren’t redirected automatically, click the button above to view this product on Amazon.
      </p>
    </div>
  );
}

export default Product;
