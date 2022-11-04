import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink to="/">Liste des produits</NavLink>
    <NavLink to="/product/add">Ajouter un produit</NavLink>
  </nav>
);

export default Nav;
