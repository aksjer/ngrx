import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { UserSearchAction } from '../../../actions/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() { }

  search(term: string) {
    this._store.dispatch(new UserSearchAction(term));
  }

}
