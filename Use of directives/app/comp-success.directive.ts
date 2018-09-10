import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {
  
  constructor(private el: ElementRef) 
  {
      console.log(el);
      //el.nativeElement.style.color = "Red"
  }


  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('green');

  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
  }

  setcolor(color:string)
  {
    this.el.nativeElement.style.color=color;
  }
}
