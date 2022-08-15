import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    AbilitiesComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    CurriculumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
En su app.module.tsarchivo simplemente agregue las siguientes cosas:

declarar

import { LocationStrategy, HashLocationStrategy} from '@angular/common';
y en proveedores agregar lo siguiente

   @NgModule({
        declarations: [...],
        imports:[...],
        providers:[..,{ provide: LocationStrategy, useClass: HashLocationStrategy },..]
        ...,
    })
Espero que esto resuelva su problema.

Y si es posible mantén tus Rutas en archivo aparte.

Salud
 */
