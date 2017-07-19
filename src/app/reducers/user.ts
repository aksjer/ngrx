import { User } from '../models/user';
import * as user from '../actions/user';

export interface State {
  id: number;
  name: string;
  website: string;
}

const initialState: State = {
  id: 0,
  name: null,
  website: null
}

export const reducer = (state = initialState, action: user.Actions): State => {
  debugger
  switch (action.type) {
    case user.LOAD:
    default:
      return state;
  }
}

export const getUserName = (state: State) => {
  return state ? state.name : state;
}
