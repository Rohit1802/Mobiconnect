import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientOnboardingComponent } from './client-onboarding/client-onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectOnboardingComponent } from './project-onboarding/project-onboarding.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientOnboardingComponent,
    ProjectOnboardingComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientDeleteComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProjectDeleteComponent,
    TimesheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
