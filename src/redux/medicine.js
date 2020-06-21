 
import * as ActionTypes from './ActionTypes';

export const Medicines = (state = { isLoading: true,
    errMess: null,
    medicines:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEDICINES:
            return {...state, isLoading: false, errMess: null, medicines: action.payload};

        case ActionTypes.MEDICINES_LOADING:
            return {...state, isLoading: true, errMess: null, medicines: []}

        case ActionTypes.MEDICINES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};