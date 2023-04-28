import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeavesService } from '../leaves.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaveForm: FormGroup;
  approvers: any[] = [];
  data: any[] = [];
  validForm: boolean = false;
  response: any;
  error: any;

  constructor(private fb: FormBuilder, private leaves: LeavesService) {
    this.leaveForm = this.fb.group({
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      day: ['', Validators.required],
      approver: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.leaves.getAllApprovers().subscribe((data: any[]) => {
      this.data = data;

      for (var i in this.data) {
        var item = this.data[i];
        this.approvers.push(item.name);
      }
      console.log(this.data);
      console.log(this.approvers);
    });

    
  }

  onSubmit() {
    this.saveData();
    
  }

  // do something with the form data
  saveData() {
    this.leaves.saveLeavesData(this.leaveForm.value).subscribe((result) => {
      console.log(result);
    });
  }
}



