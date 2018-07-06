import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  GetBookDetails()  
  {
      return[
          {"Name":"C Programming" , "Price":1000 , "Auther":"Dennis Ritchi","NoofPages":500},
          {"Name":"JAVA" , "Price":2000 , "Auther":"James Gosling","NoofPages":800},
          {"Name":"C++" , "Price":1500 , "Auther":"Stroustrup","NoofPages":400},


      ]

  }
}
