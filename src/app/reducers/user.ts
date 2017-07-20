import { User } from '../models/user';
import * as user from '../actions/user';

export interface State {
  loading: boolean,
  users: User[]
}

const initialState: State = {
  loading: true,
  users: []
}

export const reducer = (state = initialState, action: user.Actions): State => {
  switch (action.type) {
    case user.USER_LOAD:
      return {
        loading: true,
        users: []
      }
    case user.USER_LOAD_SUCCESS:
      return {
        loading: false,
        users: action.payload
      }
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
export const getUsers = (state: State) => state.users;

