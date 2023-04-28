import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http:HttpClient) { }
  URLP="http://localhost:8080/projects";
  addproject(data:any)
  {
    return this.http.post<any>(this.URLP,data)
  }
  getProjects(): Observable<any> {
    return this.http.get<any>(this.URLP);
  }
  getProjectById(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.URLP}/${projectId}`);
  }
  updateProject(projectId: string, projectData: any): Observable<any> {
    return this.http.put<any>(`${this.URLP}/${projectId}`, projectData);
  }
  deleteProject(projectId: string): Observable<any> {
    return this.http.delete<any>(`${this.URLP}/${projectId}`);
  }
  

}
