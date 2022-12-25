import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
// allow use to pass state value using root-Reducer
// which is the higher state of ower app
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signIn">SIGN IN </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropdown /> : null}
  </div>
);

// function allow us to take the currentUser state from
// user reducer in rootReducer
// state is the root-reducer wher we put ower all state
// createStructuredSelector allow us to use directly the function pointed to
//  selector file with out passing the state argument
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
