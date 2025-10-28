import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products"; // main products page
import Product from "./pages/Product";   // single product page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* Main products */}
        <Route path="/products/:slug" element={<Product />} /> {/* Single product */}
      </Routes>
    </Router>
  );
}

export default App;
