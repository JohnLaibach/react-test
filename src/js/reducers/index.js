import { CHANGE_FILTER } from "../constants/action-types";

const initialState = {
    filters: {
        'timePeriod': {
            value: 1,
            isFetching: false
        }
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            let id = action.id;
            return Object.assign({}, state, {
                [id]: Object.assign({}, state[id], { isFetching: true })
            });
        default:
            return state;
    }
};

export default rootReducer;
