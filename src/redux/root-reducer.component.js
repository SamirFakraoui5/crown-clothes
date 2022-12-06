import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// represent the Overl all state of our app based of our reducers
// user keyy it's a slice of state of our app
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
