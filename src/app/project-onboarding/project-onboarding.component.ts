import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project-onboarding',
  templateUrl: './project-onboarding.component.html',
  styleUrls: ['./project-onboarding.component.css']
})
export class ProjectOnboardingComponent {
  
  projectForm= new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      owner_client: new FormControl('',[Validators.required]),
      owner_consultant: new FormControl('',[Validators.required]),
      end_date: new FormControl('',[Validators.required]),
      status: new FormControl('', [Validators.required]),
    }
  );
  get name()
{
  return this.projectForm.get('name');
}
get owner_client()
{
  return this.projectForm.get('owner_client');
}
get owner_consultant()
{
  return this.projectForm.get('owner_consultant');
}

get end_date()
{
  return this.projectForm.get('end_date');
}
get status()
  {
    return this.projectForm.get('status');
  }

  formSubmitted = false;
  successMessage = 'Project Details submitted successfully!';
constructor(private projectService:ProjectService){}
Register(data:any) {
  if (window.confirm('Are you sure you want to submit the form?')) {
    // Submit the form
    console.log(this.projectForm.value);
    this.projectService.addproject(data).subscribe(result=>{
      console.warn(result)
    })
    this.formSubmitted = true;
  }
}

  
}
