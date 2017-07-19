import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user';

export interface State {
  user: fromUser.State
}

const reducers = {
  user: fromUser.reducer
}

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}

export const getUserState = (state: State) => {
  debugger
  return state.user
};
export const getUserName = createSelector(getUserState, fromUser.getUserName);