import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import { PersonService } from './services/person.service';
import { PersonNewFormComponent } from './components/persons/person-new-form/person-new-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonListComponent,
    PersonNewFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
