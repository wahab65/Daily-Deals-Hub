import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#1a73e8" }}>All Products</h1>

      {products.length === 0 ? (
        <p style={{ textAlign: "center" }}>Loading products...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                textDecoration: "none",
                color: "#333",
                backgroundColor: "#f9f9f9",
              }}
            >
              <span>{p.name}</span>
              <span style={{ color: "#1a73e8", fontWeight: "bold" }}>View →</span>
            </Link>
          ))}
        </div>
      )}

      <p style={{ marginTop: "2rem", fontStyle: "italic", fontSize: "0.9rem", color: "#444", textAlign: "center" }}>
        As an Amazon Associate, I earn from qualifying purchases.
      </p>
    </div>
  );
}

export default Products;
