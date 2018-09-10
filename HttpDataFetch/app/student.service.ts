import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent   } from './Student';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  private _url:string =  "/assets/Data/Student.json";

  GetStudentDetails():Observable<IStudent[]>
  {
    return this.http.get<IStudent[]>(this._url);
  }
}
