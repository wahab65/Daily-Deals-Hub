import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../utils/sheetApi";
import "./CategoryPage.css";



import Navbar from "../components/Navbar";
function capitalize(word = "") {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function CategoryPage() {
    const { category } = useParams();             // e.g. "beauty"
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const prettyCategory = capitalize(category || "");

    useEffect(() => {
        setLoading(true);
        fetchProducts()
            .then((all) => {
                const filtered = all.filter(
                    (p) => (p.category || "uncategorized") === (category || "").toLowerCase()
                );
                setProducts(filtered);
            })
            .catch((err) => {
                console.error("Error loading category products:", err);
            })
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className="category-page">
            {/* Black banner heading like your screenshot */}

            <Navbar />  {/* 👈 navbar + disclosure now appear here too */}
            <section className="category-hero">
                <h1>{prettyCategory}</h1>
            </section>

            <section className="category-content">
                <div className="category-header-row">
                    <p>
                        Showing {products.length} result
                        {products.length !== 1 ? "s" : ""}
                    </p>

                    {/* just a visual placeholder, not wired to sorting yet */}
                    <select className="sort-select" defaultValue="default">
                        <option value="default">Default sorting</option>
                    </select>
                </div>

                {loading ? (
                    <p>Loading products...</p>
                ) : products.length === 0 ? (
                    <p>No products found in this category.</p>
                ) : (
                    <div className="category-grid">
                        {products.map((p) => (
                            <div key={p.slug} className="category-card">

                                {/* Clickable area (internal link) */}
                                <Link to={`/products/${p.slug}`} className="category-card-top">
                                    {p.imageUrl && (
                                        <div className="category-card-image-wrap">
                                            <img
                                                src={p.imageUrl}
                                                alt={p.name}
                                                className="category-card-image"
                                            />
                                        </div>
                                    )}
                                    <h3 className="category-card-title">{p.name}</h3>
                                </Link>

                                {/* BUY BUTTON */}
                                <a
                                    href={p.affiliate_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="buy-btn"
                                >
                                    Buy on Amazon
                                </a>
                            </div>
                        ))}
                    </div>

                )}


                <div className="back-home">
                    <Link to="/">← Back to Home</Link>
                </div>
            </section>
        </div>
    );
}
