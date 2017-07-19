import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD = '[User] Load';
export const SEARCH = '[User] Search';
export const SEARCH_COMPLETE = '[User] Search Complete';

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: User[]) { }
}

export class SearchAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;
  constructor(public payload: User[]) { }
}

export type Actions = LoadAction | SearchAction | SearchCompleteAction;