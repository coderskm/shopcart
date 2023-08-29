import "./Navbar.css";
import Cart from "../assets/cart.png";
import Search from "../assets/search.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>ShopCart</h1>
      </NavLink>
      <input type="text" placeholder="enter item to search" />
      <button className="btn-search">
        <img src={Search} alt="search" />
      </button>
      <div className="nav-items">
        <div>
          <select name="category" id="category-style">
            <option value="default">categories</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men&apos;s clothing</option>
            <option value="women's clothing">women&apos;s clothing</option>
          </select>
        </div>
        <div>
          <NavLink to="/cart">
            <img src={Cart} alt="cart_image" className="cart-image" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
