import cartActionType from "./cart.types";
import { addItemToCart } from "./cart.utlis";

const INTIAL_STATE = {
  hidden: true,
  cartItmes: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItmes: addItemToCart(state.cartItmes, action.payload),
      };
    case cartActionType.CLEAR_ITEM_FROM_CAR:
      return {
        ...state,
        cartItmes: state.cartItmes.filter(
          (cartItem) => cartItem.id !== action.payload.id // we are saying that when the cartItem id defferent from the id that comming from the action
          // the we going to keep it othewys we are going to filter it and return an new array
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
