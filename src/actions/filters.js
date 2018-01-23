import { SET_TIME_PERIOD } from "../constants/action-types";

export const setTimePeriod = timePeriod => (
    {
        type: SET_TIME_PERIOD,
        payload: timePeriod
    }
);
