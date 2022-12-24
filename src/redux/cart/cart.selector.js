
import { createSelector } from "reselect";

// input selector
// selector that dosn't use createSelector
export const selectCart = state => state.cart;

// output selector
// select cartItmes state from the cart reducer
export const selectCartItmes = createSelector(
    [selectCart],
    cart => cart.cartItmes
);

//select cartImes and preform ItemCount for each cartItmes
export const selectCartItmesCount = createSelector(
    [selectCartItmes],
    cartItmes => cartItmes.reduce(
        (accumelatedQuantity, cartItem) => accumelatedQuantity + cartItem.quantity,
        0
      )
);