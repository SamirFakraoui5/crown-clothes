import { createSelector } from "reselect";

//input selector
const selectShop = (state) => state.shop;

//select shopData
export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);
