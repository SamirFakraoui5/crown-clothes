import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { ClearItemFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { imageUrl, quantity, name, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
