import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientOnboardingComponent } from './client-onboarding/client-onboarding.component';
import { ProjectOnboardingComponent } from './project-onboarding/project-onboarding.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
{
  path:'timesheet',
  component:TimesheetComponent
},
{
  path:'client',
  component:ClientOnboardingComponent
},
{
  path:'project',
  component:ProjectOnboardingComponent
},
{
  path:'modify',
  component:ClientListComponent
},
{
  path:'edit/:id',
  component:ClientEditComponent
},
{
  path:'delete/:id',
  component:ClientDeleteComponent
},
{
  path:'modifyproject',
  component:ProjectListComponent
},
{
  path:'editproject/:id',
  component:ProjectEditComponent
},
{
  path:'deleteproject/:id',
  component:ProjectDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
