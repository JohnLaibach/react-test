import { combineReducers } from "redux";

import filters from "./filters";

const initialState = {
    timePeriodFilter: 1
}

export default combineReducers({
    filters,
})
