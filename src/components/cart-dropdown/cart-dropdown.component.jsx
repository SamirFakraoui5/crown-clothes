import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItmes } from "../../redux/cart/cart.selector";
import "./cart-dropdown.styles.scss";
import { createStructuredSelector } from "reselect";
import { taggelCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItmes, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItmes.length ? (
          cartItmes.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(taggelCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItmes: selectCartItmes,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
