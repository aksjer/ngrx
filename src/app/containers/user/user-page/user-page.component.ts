import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/user';
import { getUserName } from '../../../reducers/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users$: Observable<any>;

  constructor(
    private _store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.users$ = this._store.select(fromRoot.getUserName);
  }

}
