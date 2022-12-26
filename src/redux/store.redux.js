// store that we need to update our dom

/******* FLUX PATTERN *******/
// action => midleWare => rootreducer => store => UpdateDOM

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// the middleware that the store expecting from us is
// an array
const midellWare = [logger];

// ...midellWare means we are going to add all
// the midleware array and argument in applymidleWare without
// passing it arg by arg
export const store = createStore(rootReducer, applyMiddleware(...midellWare));

// here we are creating a presisting version of our store
export const persistor = persistStore(store);

export default {store, persistor};