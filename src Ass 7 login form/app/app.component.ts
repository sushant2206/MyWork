import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private username : String
  private password : String 

  public AcceptData(value1, value2)
  {
    this.username = value1;
    this.password = value2;
  }

}
