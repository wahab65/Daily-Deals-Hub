import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
