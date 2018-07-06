import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public AcceptData(valu1,value2,value3,value4,value5,value6)
  {
    console.log(valu1,value2,value3,value4,value5,value6);
  }

  public LogChange(data)
  {
    console.log(data);
  }
}
