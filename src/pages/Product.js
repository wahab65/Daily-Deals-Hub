import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";

function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      const found = data.find((p) => p.slug === slug);
      setProduct(found);
    });
  }, [slug]);

  if (!product) return <div style={{ textAlign: "center", padding: "2rem" }}>Loading product...</div>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <Link to="/products" style={{ display: "inline-block", marginBottom: "1rem", color: "#1a73e8" }}>
        ← Back to All Products
      </Link>

      <header style={{
        backgroundColor: "#1a73e8",
        color: "#fff",
        padding: "3rem 2rem 2rem 2rem",
        textAlign: "center",
        borderRadius: "0 0 20px 20px",
        marginBottom: "1.5rem",
      }}>
        <h1 style={{ fontSize: "2.5rem", margin: "0.5rem 0" }}>{product.name}</h1>
      </header>

      <div style={{
        backgroundColor: "#FFEB3B",
        color: "#333",
        padding: "2rem",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        textAlign: "center",
      }}>
        <p>{product.description || "This product is one of our top recommendations. Click below to buy!"}</p>

        <p style={{ marginTop: "1rem", fontStyle: "italic", fontSize: "0.9rem", color: "#444" }}>
          As an Amazon Associate, I earn from qualifying purchases.
        </p>

        {product.affiliate_link && (
          <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer"
             style={{
               display: "inline-block",
               marginTop: "1.5rem",
               backgroundColor: "#ff9900",
               color: "#fff",
               padding: "0.8rem 1.5rem",
               borderRadius: "6px",
               textDecoration: "none",
               fontWeight: "bold",
             }}>
            Buy on Amazon →
          </a>
        )}
      </div>
    </div>
  );
}

export default Product;
