import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    owner_client: new FormControl('', [Validators.required]),
    owner_consultant: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  formSubmitted = false;
  successMessage = 'Project details updated successfully!';
  projectId = '';

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.params['id'];
    this.projectService.getProjectById(this.projectId).subscribe(project => {
      this.updateForm.setValue({
        name: project.name,
        owner_client: project.owner_client,
        owner_consultant: project.owner_consultant,
        end_date: project.end_date,
        status: project.status
      });
    });
  }

  get name() {
    return this.updateForm.get('name');
  }

  get owner_client() {
    return this.updateForm.get('owner_client');
  }

  get owner_consultant() {
    return this.updateForm.get('owner_consultant');
  }

  get end_date() {
    return this.updateForm.get('end_date');
  }

  get status() {
    return this.updateForm.get('status');
  }

  updateProject(data:any) {
    if (window.confirm('Are you sure you want to submit the form?')) {
      const updatedProject = {
        name: this.updateForm.value.name,
        owner_client: this.updateForm.value.owner_client,
        owner_consultant: this.updateForm.value.owner_consultant,
        end_date: this.updateForm.value.end_date,
        status: this.updateForm.value.status
      };
      this.projectService.updateProject(this.projectId, updatedProject).subscribe(() => {
        this.formSubmitted = true;
      });
    }
  }
}

