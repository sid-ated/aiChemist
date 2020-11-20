 
import * as ActionTypes from './ActionTypes';

export const Symptoms = (state = {
    errMess: null,
    symptoms:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SYMPTOMS:
            return {...state, errMess: null, symptoms: action.payload};

        case ActionTypes.SYMPTOMS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};