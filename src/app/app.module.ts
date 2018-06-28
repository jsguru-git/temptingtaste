import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';

import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {RoutesModule} from './routes/routes.module';

import {ToastrModule} from 'ngx-toastr';
import { CookieModule } from 'ngx-cookie';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from './firebase.config';
import {firebaseConfigTwo} from './firebase.config';
import { NgxEditorModule } from 'ngx-editor';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


// https://github.com/ocombe/ng2-translate/issues/218


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule, // required for ng2-tag-input
    CoreModule,
    LayoutModule,
    SharedModule.forRoot(),
    CookieModule.forRoot(),
    RoutesModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(firebaseConfigTwo),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxEditorModule,
    CommonModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
