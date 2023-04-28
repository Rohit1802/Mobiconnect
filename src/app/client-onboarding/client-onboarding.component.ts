import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-onboarding',
  templateUrl: './client-onboarding.component.html',
  styleUrls: ['./client-onboarding.component.css']
})
export class ClientOnboardingComponent {

  LoginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    end_date:new FormControl('',[Validators.required])
  });

get name()
{
  return this.LoginForm.get('name')
}
get location()
{
  return this.LoginForm.get('location')
}

get end_date()
{
  return this.LoginForm.get('end_date')
}

formSubmitted = false;
  successMessage = 'Form submitted successfully!';

constructor(private clientService:ClientService){}
Login(data:any) {
  if (window.confirm('Are you sure you want to submit the form?')) {
    // Submit the form
    console.log(this.LoginForm.value);
    this.clientService.addclient(data).subscribe(result=>{
      console.warn(result)
    })
    this.formSubmitted = true;
  }
}
}
