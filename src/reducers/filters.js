import { SET_TIME_PERIOD } from "../constants/action-types";
import { initialState } from "./index";

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TIME_PERIOD:
            return {
                ...state,
                timePeriodFilter: [...state.timePeriodFilter, action.payload]
            }
        default:
            return state;
    }
}