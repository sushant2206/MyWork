import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit 
{
  public Book = [];


  constructor(private _bookservice:BookService) 
  {
    
  }

  ngOnInit() 
  {
    this.Book =  this._bookservice.GetBookDetails();
  }

}
