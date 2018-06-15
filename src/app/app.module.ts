import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import { PersonService } from './services/person.service';
import { PersonNewFormComponent } from './components/persons/person-new-form/person-new-form.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';
import { PersonProfileComponent } from './components/persons/person-profile/person-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonListComponent,
    PersonNewFormComponent,
    HomeComponent,
    NotFoundComponent,
    AppointmentsListComponent,
    PersonProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
