import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { UserSearch } from '../models/user-search';

export const USER_LOAD             = '[User] Load';
export const USER_LOAD_SUCCESS     = '[User] Load Success';
export const USER_SEARCH           = '[User] Search';
export const USER_SEARCH_SUCCESS   = '[User] Search Success';

export class UserLoadAction implements Action {
  readonly type = USER_LOAD;
}

export class UserLoadSuccessAction implements Action {
  readonly type = USER_LOAD_SUCCESS;
  constructor(public payload: User[]) { }
}

export class UserSearchAction implements Action {
  readonly type = USER_SEARCH;
  constructor(public payload: string) { }
}

export class UserSearchSuccessAction implements Action {
  readonly type = USER_SEARCH_SUCCESS;
  constructor(public payload: UserSearch) { }
}

export type Actions = UserLoadAction | UserLoadSuccessAction | UserSearchAction | UserSearchSuccessAction;
