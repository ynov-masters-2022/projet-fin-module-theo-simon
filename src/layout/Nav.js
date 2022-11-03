import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Liste des produits</NavLink>
      </li>
      <li>
        <NavLink to="/product/add">Ajouter un produit</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
