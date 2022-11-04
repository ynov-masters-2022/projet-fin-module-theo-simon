import {Routes, Route} from "react-router-dom";

import List from '../List';
import ProductPage from '../ProductPage';
import Styled from '../Styled';
import Add from "../Add";
import Hooks from "../Hooks";

export default () => (
  <Routes>
    <Route index element={<List/>}/>
    <Route path="product/add" element={<Add/>}/>
    <Route path="product/:productId" element={<ProductPage/>}/>
    <Route path="styled" element={<Styled/>}/>
    <Route path="hooks" element={<Hooks/>}/>
  </Routes>
)
