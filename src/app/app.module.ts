import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user';
import { reducer } from './reducers';
import { UserPageComponent } from './containers/user/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
