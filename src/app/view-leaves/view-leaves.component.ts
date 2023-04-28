import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../leaves.service';

@Component({
  selector: 'app-view-leaves',
  templateUrl: './view-leaves.component.html',
  styleUrls: ['./view-leaves.component.css']
})
export class ViewLeavesComponent implements OnInit{
  data: any[] = [];

  constructor(private leavesService : LeavesService) { }
  
  ngOnInit() {
    this.leavesService.getAllLeaves().subscribe((data: any[]) => {
      this.data = data;
      
    });
    
  }

}

