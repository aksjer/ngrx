import { User } from '../models/user';
import * as user from '../actions/user';

export interface State {
  users: User[]
}

const initialState: State = {
  users: []
}

export const reducer = (state = initialState, action: user.Actions): State => {
  switch (action.type) {
    case user.USER_LOAD_SUCCESS:
      return {
        users: action.payload
      }
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.users;
