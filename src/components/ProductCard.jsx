import "./ProductCard.css";
import Star from "../assets/star.png";
import { Link } from "react-router-dom";
const ProductCard = ({item}) => {
  return (
    <div className="product-item-style">
      <Link to={`/${item.id}`}>
        <img src={item.image} alt={item.title} className="product-image" />
      </Link>
      <hr />
      <h1 className="title-style">{item.title}</h1>
      <div className="card-price-style">
        <p className="price-style">$ {item.price}</p>
        <p className="rating-style">{item.rating.rate}</p>
        <img src={Star} alt="stars" className="star-style" />
      </div>

      <button className="btn-cart">Add To Cart</button>
    </div>
  );
}

export default ProductCard;