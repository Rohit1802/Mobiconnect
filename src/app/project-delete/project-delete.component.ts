import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  projectId: string = '';

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,private router: Router
  ) { }

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.params['id'];
  }

  deleteProject() {
    if (window.confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(this.projectId).subscribe(() => {
        this.router.navigate(['modifyproject']);
        alert('Client deleted successfully.');
      });
    } else {
      this.router.navigate(['modifyproject']);
    }
      
      
    }
  
  comeback()
  {
    this.router.navigate(['modifyproject']);
  }


}
