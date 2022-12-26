import cartActionType from "./cart.types";

export const taggelCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});

export const ClearItemFromCart = item =>({
  type:cartActionType.CLEAR_ITEM_FROM_CAR,
  payload:item
})