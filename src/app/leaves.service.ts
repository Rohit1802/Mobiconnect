import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  url = 'http://localhost:8080/leaves';
  api = 'http://localhost:8080/employees/search?designation=manager'

  constructor(private http: HttpClient) { }
  getAllLeaves() {
    return this.http.get<any[]>(this.url);
  }
  saveLeavesData(data: any){
    return this.http.post(this.url, data);
  }
  getAllApprovers() {
    return this.http.get<any[]>(this.api);
  }

}
