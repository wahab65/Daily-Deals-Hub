import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products"; // main products page
import Product from "./pages/Product";   // single product page
import CategoryPage from "./pages/CategoryPage"; // <-- ADD THIS
import Footer from "./components/Footer";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Category pages */}
          <Route path="/category/:category" element={<CategoryPage />} />

          {/* All products */}
          <Route path="/products" element={<Products />} />

          {/* Single product */}
          <Route path="/products/:slug" element={<Product />} />

                    <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />

        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
