import { Directive, ElementRef } from '@angular/core';
import { BADFAMILY } from 'dns';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) 
  {
    //this.el.nativeElement.style.fontweight = 'fantasy';
    this.el.nativeElement.style.background = 'yellow';
    
   }

}
