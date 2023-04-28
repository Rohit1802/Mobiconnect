import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {
  clientId: any;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) {
    this.clientId = this.route.snapshot.paramMap.get('id');
  }

  deleteClient() {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClient(this.clientId).subscribe(() => {
        this.router.navigate(['modify']);
        alert('Client deleted successfully.');
      });
    } else {
      this.router.navigate(['modify']);
    }
 
  }
  back(){
    this.router.navigate(['modify']);
  }
  
}
