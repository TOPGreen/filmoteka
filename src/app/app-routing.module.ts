import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {EditFilmComponent} from './components/edit-film/edit-film.component';
import {JournalComponent} from './components/journal/journal.component';
import {OrdersComponent} from './components/orders/orders.component';
import {RequestsComponent} from './components/requests/requests.component';
import {FilmInfoComponent} from './components/film-info/film-info.component';
import {OrderFormComponent} from "./components/order-form/order-form.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "", component: MainComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "edit_film/:id", component: EditFilmComponent, canActivate: [AuthGuard]},
  {path: "journal", component: JournalComponent, canActivate: [AuthGuard]},
  {path: "orders", component: OrdersComponent, canActivate: [AuthGuard]},
  {path: "requests", component: RequestsComponent, canActivate: [AuthGuard]},
  {path: "info/:id", component: FilmInfoComponent, canActivate: [AuthGuard]},
  {path: "order", component: OrderFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
