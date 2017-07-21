import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as user from '../actions/user';
import 'rxjs/add/operator/switchmap';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { UserSearch } from '../models/user-search';

@Injectable()
export class UserEffects {

  FAKE_USERS: User[] = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'jack' },
    { id: 3, name: 'martin' },
    { id: 4, name: 'pierre' },
    { id: 5, name: 'aurélie' },
    { id: 6, name: 'benoit' }
  ];

  constructor(
    private _actions$: Actions,
  ) { }

  @Effect()
  userLoad$: Observable<Action> = this._actions$
    .ofType(user.USER_LOAD)
    .switchMap(() =>
      Observable
        .of(this.FAKE_USERS)
        .delay(1000)
        .map((users: User[]) => new user.UserLoadSuccessAction(users))
    );

  @Effect()
  userSearch$: Observable<Action> = this._actions$
    .ofType(user.USER_SEARCH)
    .map(toPayload)
    .switchMap(term => this.search(term))
    .map(users => new user.UserSearchSuccessAction(users));

  /* ---------------------------------------------------------------------------------- */

  search(term): Observable<UserSearch> {
    return Observable
      .of(this.FAKE_USERS)
      .delay(1000)
      .map((users: User[]) => {
        return { term: term, users: users.filter(user => user.name.toLowerCase().includes(term.toLowerCase())) };
      });
  }

}
