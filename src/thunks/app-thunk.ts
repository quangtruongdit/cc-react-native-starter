// types.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/root-reducer';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>;

