import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import {
  MdProgressSpinnerModule,
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdTabsModule,
  MdMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user';
import { reducers } from './reducers';
import { UserPageComponent } from './containers/user/user-page/user-page.component';

import * as user from './reducers/user';
import { UserSearchComponent } from './containers/user/user-search/user-search.component';
import { HomePageComponent } from './containers/home/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserSearchComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    MdProgressSpinnerModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
