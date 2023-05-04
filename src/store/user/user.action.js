import { createAction  } from "../../utils/Reducer/reducer";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => (createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
