import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travelling Portal';

  city = [
    {name : "Pune"},
    {name : "Mumbai"},
    {name : "Delhi"},
    {name : "Hydrabad"}
  ];
  selectedValue: String;

  private username : String
  private password : String 

  public AcceptData(value1, value2)
  {
    this.username = value1;
    this.password = value2;
  }

}
