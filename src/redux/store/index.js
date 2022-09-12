import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import mainReducer from '../reducers/index.js';
import favouritesReducer from '../reducers/favouritesReducer';
import jobsReducer from '../reducers/jobsReducer';

const mainReducer = combineReducers({
    favourite: favouritesReducer,
    job: jobsReducer
});

const store = configureStore({
    reducer: mainReducer,
});

export default store;
