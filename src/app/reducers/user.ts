import { User } from '../models/user';
import * as user from '../actions/user';

export interface State {
  loading: boolean;
  searchTerm: string;
  users: User[];
}

const initialState: State = {
  loading: true,
  searchTerm: null,
  users: []
};

export const reducer = (state: State = initialState, action: user.Actions): State => {
  switch (action.type) {
    case user.USER_LOAD:
      return {
        loading: true,
        searchTerm: null,
        users: []
      };
    case user.USER_SEARCH:
      return {
        loading: true,
        searchTerm: action.payload,
        users: []
      };
    case user.USER_LOAD_SUCCESS:
      return {
        loading: false,
        searchTerm: null,
        users: action.payload
      };
    case user.USER_SEARCH_SUCCESS:
      return {
        loading: false,
        searchTerm: action.payload.term,
        users: action.payload.users
      };
    default:
      return state;
  }
};

export const getLoading = (state: State) => state.loading;
export const getUsers = (state: State) => state.users;
export const getUsersName = (state: State) => state.users.map(user => user.name);
