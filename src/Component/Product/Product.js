import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  const { name, price, seller, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product_info">
        <h3 className="product_name">{name}</h3>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn_cart">

        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
