import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { UserSearchAction } from '../../../actions/user';
import * as fromRoot from '../../../reducers';
import { getSearchTerm } from '../../../reducers/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchTerm$: Observable<string>;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.searchTerm$ = this._store.select(fromRoot.getSearchTerm);
  }

  search(term: string) {
    this._store.dispatch(new UserSearchAction(term));
  }

}
