import cartActionType from './cart.types';
import { addItemToCart } from './cart.utlis';


const INTIAL_STATE = {
  hidden: true,
  cartItmes:[],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
      case cartActionType.ADD_ITEM : 
      return {
        ...state,
        cartItmes :  addItemToCart(state.cartItmes,action.payload)
      }
    default:
      return state;
  }
};
export default cartReducer;
