import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1shopping-bag.svg";
import { connect } from "react-redux";
import { taggelCartHidden } from "../../redux/cart/cart.action";
import "./cart-icon.styles.scss";

const CartIcon = ({ taggelCartHidden }) => (
  <div className="cart-icon" onClick={taggelCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  taggelCartHidden: () => dispatch(taggelCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
