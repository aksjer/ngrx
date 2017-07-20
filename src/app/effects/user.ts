import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as user from '../actions/user';
import 'rxjs/add/operator/switchmap';
import { User } from '../models/user';
import { UserLoadSuccessAction } from '../actions/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserEffects {

  constructor(
    private _actions$: Actions
  ) { }

  @Effect()
  userLoad$: Observable<Action> = this._actions$
    .ofType(user.USER_LOAD)
    .switchMap(() => Observable
      .of([{ id: 1, name: 'bob' }, { id: 2, name: 'jack' }])
      .delay(2000)
      .map((users: User[]) => new user.UserLoadSuccessAction(users))
    );

}