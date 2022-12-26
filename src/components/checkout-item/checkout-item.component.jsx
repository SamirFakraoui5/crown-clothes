import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  ClearItemFromCart,
  addQuantityToItem,
  RemoveQuantityFromItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem , addQuantity,removeQuantity}) => {
  const { imageUrl, quantity, name, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="remove-quantity" onClick={() => removeQuantity(cartItem)}>&lt;</span>
        {quantity}
        <span className="add-quantity" onClick={() => addQuantity(cartItem)}>&#62;</span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
  addQuantity: (item) => dispatch(addQuantityToItem(item)),
  removeQuantity: (item) => dispatch(RemoveQuantityFromItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
