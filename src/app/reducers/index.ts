import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user';

export interface State {
  user: fromUser.State
}

export const reducers = {
  user: fromUser.reducer
}

export const getUserState = (state: State) => state.user;
export const getLoading = createSelector(getUserState, fromUser.getLoading);
export const getUsers = createSelector(getUserState, fromUser.getUsers);