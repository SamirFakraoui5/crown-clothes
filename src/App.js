import React from "react";
import { HomePage } from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    } 
  }

  // function allow us to close 
  // the open object state comming from the fire base
  unsubscribeFromAuth = null;
   componentDidMount(){
     this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{
        this.setState({currentUser:user});
        console.log(user);
      })
  }

  componentWillUnmount(){
    // this allow us to close the subscirbtion each 
    // time the component unMount from the dom
    // unMount mean the app get closed 
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div className="App">
        <Header  currentUser ={this.state.currentUser}/>
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
