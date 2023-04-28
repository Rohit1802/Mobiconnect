import { Component, OnInit} from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit  {
  constructor(private clientService: ClientService){}
  public collection:any;

  ngOnInit(): void {
   this.clientService.getClient().subscribe(result=>{
    this.collection=result;
    console.log(this.collection)
   })  ; 
  }


}
