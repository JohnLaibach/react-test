import { combineReducers } from "redux";

import filtersReducer from "./filters";

const initialState = {
    timePeriodFilter: 1
}

export default combineReducers({
    filtersReducer
});
