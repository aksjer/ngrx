import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private _http: Http
  ) { }

  get(): Observable<User[]> {
    debugger
    return this._http
      .get(environment.apiUrl)
      .map((r: Response) => {
        debugger
        return r.json()
      });
  }

}
