import { createSelector } from "reselect";

// input selector
// selector that dosn't use createSelector
export const selectCart = (state) => state.cart;

// output selector
// select cartItmes state from the cart reducer
export const selectCartItmes = createSelector(
  [selectCart],
  (cart) => cart.cartItmes
);

//select cartImes and preform ItemCount for each cartItmes
export const selectCartItmesCount = createSelector(
  [selectCartItmes],
  (cartItmes) =>
    cartItmes.reduce(
      (accumelatedQuantity, cartItem) =>
        accumelatedQuantity + cartItem.quantity,
      0
    )
);

// hidden selector

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// selector for count cartItmes
export const selectCartTolal = createSelector([selectCartItmes], (cartItmes) =>
  cartItmes.reduce(
    (accumelatedPrice, cartItmes) =>
      accumelatedPrice + cartItmes.quantity * cartItmes.price,
    0
  )
);

 