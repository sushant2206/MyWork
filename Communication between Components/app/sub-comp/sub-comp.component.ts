import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit {

  @Input() public parentData;

  @Output() public MyEvent = new EventEmitter();


  public SendEvent()
  {
    console.log(this.MyEvent);
    
    this.MyEvent.emit('Hello from child');
  }


  constructor() { }

  ngOnInit() {
  }

}
