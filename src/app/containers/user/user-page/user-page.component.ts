import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/user';
import { UserLoadAction, UserLoadSuccessAction, UserSearchAction } from '../../../actions/user';
import { Subscription } from 'rxjs/Subscription';

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
    this._store
      .select(fromRoot.getSearchTerm)
      .subscribe(term =>
        !term ? this._store.dispatch(new UserLoadAction())
          : this._store.dispatch(new UserSearchAction(term))
      )
      .unsubscribe();
  }

}
