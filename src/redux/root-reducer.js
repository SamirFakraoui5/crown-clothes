import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// configure our localStore with presiste librery
// here we are saying
const persistConfig = {
  key: 'root', // what point inside our reducer object do you wanna start storing everything
  storage, // store it in local store
  whitelist: ['cart'], // what we going to store from our reducer
};

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// represent the Overl all state of our app based of our reducers
// user keyy it's a slice of state of our app
// after we set presiste librery here we returning a new persisting reducer
// a modify version of our rootReducer
export default persistReducer(persistConfig,rootReducer);