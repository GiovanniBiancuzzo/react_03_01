import { ADD_TO_CATALOGUE } from "../actions";

const initialState = {
    catalogue: [],
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CATALOGUE:
            return {
                ...state,
                catalogue: action.payload
            };
        default:
            return state;
    }
};

export default jobsReducer;
