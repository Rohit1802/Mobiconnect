import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL="http://localhost:8080/client";
  constructor(private http:HttpClient) { }
  
  addclient(data:any){
    return this.http.post<any>(this.URL,data);
  }
  getClient(): Observable<any[]>
  {
    return this.http.get<any[]>(this.URL);
  }
  getCurrentClient(id: any): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  updateClient(id: any, data: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, data);
  }

  deleteClient(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
