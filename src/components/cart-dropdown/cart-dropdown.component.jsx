import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
 import { selectCartItmes } from "../../redux/cart/cart.selector";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItmes }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItmes.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItmes:selectCartItmes(state)
});

export default connect(mapStateToProps)(CartDropdown);