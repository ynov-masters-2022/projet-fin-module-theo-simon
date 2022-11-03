import {Routes, Route} from "react-router-dom";

import List from '../List';
import ProductPage from '../ProductPage';
import Add from "../Add";
import Header from "../Header";

export default () => (
  <Routes>
    <Route index element={<List/>}/>
    <Route path="product/add" element={<Add/>}/>
    <Route path="product/:productId" element={<ProductPage/>}/>
  </Routes>
)
