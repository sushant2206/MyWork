import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private el: ElementRef) 
  {
      console.log(el);
      //el.nativeElement.style.color = "Red"
  }


  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');

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
