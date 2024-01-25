import { combineReducers } from '@reduxjs/toolkit';
import apiReducer from '../slices/api-slice';

const rootReducer = combineReducers({
    api: apiReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;