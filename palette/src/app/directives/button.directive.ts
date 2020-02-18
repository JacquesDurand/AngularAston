import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  button: HTMLElement;

  constructor(elem: ElementRef) {
    this.button = elem.nativeElement;
    this.resetStyle();
  }

  resetStyle(): void {
    this.button.style.color = 'white';
    this.button.style.backgroundColor = "royalblue";
    this.button.style.width = '200px';
    this.button.style.border = '1px solid #ccc';
    this.button.style.borderRadius = '4px';
    this.button.style.padding = '5px 10px';
    this.button.style.textDecoration = 'none';
    this.button.style.transition = 'background-color 0.5s ease-in-out';
    this.button.style.textAlign = 'center';
  }

  @HostListener('click') onclick(event: Event): void {
    alert('yooo');
  }
  @HostListener('mouseover') onHover(event: Event): void {
    this.button.style.backgroundColor = 'orangered';
  }
  @HostListener('mouseout') onMouseOut(event: Event): void {
    this.resetStyle();
  }
}
