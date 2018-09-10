import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-comp3',
  templateUrl: './sub-comp3.component.html',
  styleUrls: ['./sub-comp3.component.css']
})
export class SubComp3Component implements OnInit {

  public Book = [];


  constructor(private _bookservice:BookService) 
  {
    
  }

  ngOnInit() 
  {
    this.Book =  this._bookservice.GetBookDetails();
  }

}
