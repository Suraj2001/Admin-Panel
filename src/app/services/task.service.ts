import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/general/';
  }

  public saveTask(task: any) {
    return this.http.post(this.baseUrl + 'saveTask', task);
  }

  public getAllTask(): Observable<EventInput> {
    return this.http.get<EventInput>(this.baseUrl + 'getAllTask');
  }

  public deleteTask(id?: String) {
    return this.http.delete(this.baseUrl + 'deleteTask/' + id);
  }

  public updateTask(task: any, id?: String) {
    return this.http.put(this.baseUrl + 'editTask/' + id, task);
  }
}
