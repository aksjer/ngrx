import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { UserSearchAction } from '../../../actions/user';
import * as fromRoot from '../../../reducers';
import { getSearchTerm } from '../../../reducers/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromevent';
import 'rxjs/add/operator/debouncetime';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit, OnDestroy {

  @ViewChild('term') termInput: ElementRef;
  searchTerm$: Observable<string>;
  searchSubscription: Subscription;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.searchTerm$ = this._store.select(fromRoot.getSearchTerm);
    this.searchSubscription = Observable
      .fromEvent(this.termInput.nativeElement, 'keyup')
      .debounceTime(500)
      .map((el: KeyboardEvent) => (<HTMLInputElement>el.target).value)
      .subscribe((term: string) =>
        this._store.dispatch(new UserSearchAction(term))
      );
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
