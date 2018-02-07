import { SET_TIME_PERIOD } from "../constants/action-types";
import { initialState } from "./index";

const filtersReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_TIME_PERIOD:
            return {
                ...state,
                timePeriodFilter: [...state.timePeriodFilter, action.selectedItems]
            }
        default:
            return state;
    }
}

export default filtersReducer;
