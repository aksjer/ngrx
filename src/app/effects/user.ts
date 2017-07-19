import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from '../services/user/user.service';
import { Observable } from 'rxjs/Observable';
import * as user from '../actions/user';
import 'rxjs/add/operator/switchmap';

@Injectable()
export class UserEffects {

  constructor(
    private _actions$: Actions,
    private _userService: UserService
  ) { }

  @Effect()
  load$: Observable<Action> = this._actions$
    .ofType(user.LOAD)
    // .map(toPayload)
    .switchMap(query => {
      debugger
      return this._userService.get()
        .map(users => new user.LoadAction(users))
      // .catch(() => of(new user.SearchCompleteAction([])))
    })

}