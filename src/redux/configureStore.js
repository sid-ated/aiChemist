import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Medicines } from './medicine';
import { Comments } from './comment';
import { Symptoms } from './symptoms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';

//first we will create reducers. Reducers are the functions that take some actions on the state
//we will create reducers and then import them here and then combine them. That is all we have to
//do in this file.

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            medicines: Medicines,
            comments: Comments,
            auth: Auth,
            symptoms: Symptoms
        }),

        applyMiddleware(thunk, logger)
    );

    return store;
};

//thunk ek middleware hai jiska main kaam state aur actions ke beech me communication establish karna hai.
//isse ek centralized system ban jata hai functions ko dispatch karne ka.
