import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/action.user";

class App extends React.Component {
  // the base mane concept is to tell our app that
  // we are getting auth by googel
  // function allow us to close
  // the open object state comming from the fire base
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // open subscription keep tracking the state of our user auth
    // if any think change in our app the auth kibrary
    // send the state object to the app to know if it signed in or
    // signed out or anythink

    // unsubscribeFromAuth this function allow us to
    // close subscription to prevent memory lecks
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // means that we get the user object from the auth
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // this allow us to close the subscirbtion each
    // time the component unMount from the dom
    // unMount mean the app get closed
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  // here we are setting our action
  // dispatch function is function that send the action to all reducer
  // and based of the type of the function
  // it going to fire the target reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
// wher passing null because we don't need any props
// from owe reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);
