import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.color = 'red';
    elem.nativeElement.style.backgroundColor = " blue";
  }

}
