import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required])
  });

  formSubmitted = false;
  successMessage = 'Form submitted successfully!';

  constructor(private clientService: ClientService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.clientService.getCurrentClient(id).subscribe((result) => {
      this.updateForm.patchValue(result);
    });
  }

  get name() {
    return this.updateForm.get('name');
  }

  get location() {
    return this.updateForm.get('location');
  }

  get end_date() {
    return this.updateForm.get('end_date');
  }

  updateClient(data:any) {
    if (window.confirm('Are you sure you want to submit the form?')) {
      const data = this.updateForm.value;
      this.clientService.updateClient(this.route.snapshot.params['id'], data).subscribe(() => {
        this.formSubmitted = true;
      });
    }
  }
}
