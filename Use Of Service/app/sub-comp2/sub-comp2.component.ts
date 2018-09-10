import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-comp2',
  templateUrl: './sub-comp2.component.html',
  styleUrls: ['./sub-comp2.component.css']
})
export class SubComp2Component implements OnInit {

  public Book = [];


  constructor(private _bookservice:BookService) 
  {
    
  }

  ngOnInit() 
  {
    this.Book =  this._bookservice.GetBookDetails();
  }
}
