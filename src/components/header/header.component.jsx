import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
// allow use to pass state value using root-Reducer
// which is the higher state of ower app
import { connect, Connect } from "react-redux";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

// function allow us to take the currentUser state from
// user reducer in rootReducer
// state is the root-reducer wher we put ower all state
const mapsStateToProps = state =>({
  currentUser:state.user.currentUser
})

export default connect(mapsStateToProps)(Header);
