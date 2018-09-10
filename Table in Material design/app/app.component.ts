import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  auther: string;
  pages: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'C', auther: 'Dennis Ritchie', pages: 1000,price:3000},
  {name: 'C++', auther: 'Stroustrup', pages: 800, price:4000},
  {name: 'JAVA', auther: 'James Gosling', pages: 1200, price:5000 },
  {name: 'PHP', auther: 'Rasmus Lerdorf', pages: 1000,price:2000},
  ];


  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travelling Portal';

  city = [
    {name : "Pune"},
    {name : "M  umbai"},
    {name : "Delhi"},
    {name : "Hydrabad"}
  ];
  selectedValue: String;

  private username : String
  private password : String 

  displayedColumns: string[] = ['name', 'auther', 'pages', 'price'];
  dataSource = ELEMENT_DATA;

  public AcceptData(value1, value2)
  {
    this.username = value1;
    this.password = value2;
  }

}
