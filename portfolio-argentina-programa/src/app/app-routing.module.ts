import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  { path: '', redirectTo:'portfolio', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: CurriculumComponent },
  { path: 'home', component: HomeComponent , canActivate:[GuardGuard]},
  { path: '**',component: CurriculumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
