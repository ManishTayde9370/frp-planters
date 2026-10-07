import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Partnership from "../pages/Partnership";
import Collections from "../pages/Collections";
import CollectionDetails from "../pages/CollectionDetails";
import ProductListing from "../pages/ProductListing";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partnership" element={<Partnership />} />

      <Route path="/collections" element={<Collections />} />
      <Route
        path="/collections/:collectionId"
        element={<CollectionDetails />}
      />

      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:productId" element={<ProductDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;