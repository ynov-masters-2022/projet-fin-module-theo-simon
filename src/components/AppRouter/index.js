import { Routes, Route } from "react-router-dom";

import List from '../List';
import ProductPage from '../ProductPage';

export default () => (
  <Routes>
    <Route
      path="/"
      element={<List />}
    />
    <Route
      path="product/:productId"
      element={<ProductPage />}
    />
  </Routes>
)