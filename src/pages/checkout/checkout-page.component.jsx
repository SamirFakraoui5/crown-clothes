import React from "react";
import { connect } from "react-redux";
import {
  selectCartItmes,
  selectCartTolal,
} from "../../redux/cart/cart.selector";

import { createStructuredSelector } from "reselect";

import "./checkout-page.styles.scss";

const CheckOutPage = ({ cartItmes, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
    cartItmes.map((cartItem) => (
      <div>{cartItem.name}</div>
    ))
    }

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

// pulling our cartItems
const mapStateToProps = createStructuredSelector({
  cartItmes: selectCartItmes,
  total: selectCartTolal,
});
export default connect(mapStateToProps)(CheckOutPage);
