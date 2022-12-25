import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/11.1shopping-bag.svg";
import { connect } from "react-redux";
import { taggelCartHidden } from "../../redux/cart/cart.action";
import {selectCartItmesCount} from '../../redux/cart/cart.selector'
import "./cart-icon.styles.scss";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ taggelCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={taggelCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItmesCount
});

//  selectore in redux is creating a new value based of ower state 
// pulling a state from a reducer and computing a new value based of the state

// memoisation is the caching of ower selectors value
// we don't wanna rerender ower componant each time the state changes 
// specially whene the state that coming in dosn't change 
// we want instead passing the old value without rerender the componant
const mapDispatchToProps = (dispatch) => ({
  taggelCartHidden: () => dispatch(taggelCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
