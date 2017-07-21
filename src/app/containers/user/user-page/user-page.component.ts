import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/user';
import { getUsers } from '../../../reducers/user';
import { UserLoadAction, UserLoadSuccessAction } from '../../../actions/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  loading$: Observable<boolean>;
  users$: Observable<any>;

  constructor(
    private _store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.loading$ = this._store.select(fromRoot.getLoading);
    this.users$ = this._store.select(fromRoot.getUsersName);
    this._store.dispatch(new UserLoadAction());
  }

}
