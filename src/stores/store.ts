
import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer
, { RootState } from '../reducers/root-reducer';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Create the Redux store with the logger middleware
const store = configureStore({
    reducer: rootReducer, // Replace with your root reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger as Middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
