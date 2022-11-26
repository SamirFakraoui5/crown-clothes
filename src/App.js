import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  // the base mane concept is to tell our app that
  // we are getting auth by googel
  // function allow us to close
  // the open object state comming from the fire base
  unsubscribeFromAuth = null;
  componentDidMount() {
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
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
