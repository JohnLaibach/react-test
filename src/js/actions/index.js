import { CHANGE_FILTER } from "../constants/action-types";

export const changeFilter = filter => ({
    type: CHANGE_FILTER,
    payload: filter
});
