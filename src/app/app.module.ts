import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './components/main/main.component'
import {HeaderComponent} from './components/header/header.component'

import {AngularFireModule} from '@angular/fire';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {FilmCardComponent} from './components/film-card/film-card.component';
import {EditFilmComponent} from './components/edit-film/edit-film.component';
import {JournalComponent} from './components/journal/journal.component';
import {OrdersComponent} from './components/orders/orders.component';
import {RequestsComponent} from './components/requests/requests.component';
import {FilmInfoComponent} from './components/film-info/film-info.component';
import {OrderFormComponent} from './components/order-form/order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    FilmCardComponent,
    EditFilmComponent,
    JournalComponent,
    OrdersComponent,
    RequestsComponent,
    FilmInfoComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
