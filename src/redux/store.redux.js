// store that we need to update our dom 

/******* FLUX PATTERN *******/
// action => midleWare => rootreducer => store => UpdateDOM 


 import { createStore , applyMiddleware } from "redux";
 import logger from "redux-logger";
 import RootReducer from './root-reducer.component'
 
 // the middleware that the store expecting from us is 
 // an array
 const midellWare = [logger];

 // ...midellWare means we are going to add all 
 // the midleware array and argument in applymidleWare without 
 // passing it arg by arg
 const store = createStore(RootReducer,applyMiddleware(...midellWare));

 export default store;