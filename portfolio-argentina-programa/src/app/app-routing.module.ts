import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full', canActivate:[GuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate:[GuardGuard]},
  { path: '**',component: HomeComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
