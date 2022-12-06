import { UserActionType } from "./user.types";

// the action that the user take
export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
