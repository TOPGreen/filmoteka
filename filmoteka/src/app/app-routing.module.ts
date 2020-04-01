import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { JournalComponent } from './components/journal/journal.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "edit_film/:id", component: EditFilmComponent },
  { path: "journal", component: JournalComponent },
  { path: "orders", component: OrdersComponent },
  { path: "requests", component: RequestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
