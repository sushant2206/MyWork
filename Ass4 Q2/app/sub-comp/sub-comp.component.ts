import { Component, OnInit } from '@angular/core';
import { StudentService    } from '../student.service';
@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit 
{
  public Student = [];


  constructor(private _studentservice:StudentService) 
  {
  
  }

  ngOnInit() 
  {
    this._studentservice.GetStudentDetails()
    .subscribe(data=>this.Student=data);
  }

}
