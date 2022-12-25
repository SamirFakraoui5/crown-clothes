import { createSelector } from "reselect";

// input selector from the user reducer
export const selectUser = state => state.user;


// output selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.CurrentUser
);
