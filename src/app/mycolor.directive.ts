import { Directive, HostListener, ElementRef, Renderer, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @Output() messageEmitter = new EventEmitter();
  private colors = ['red', 'yellow', 'green', 'blue', 'orange'];
  index = 0;

  constructor(private e: ElementRef, private r: Renderer) { }

  @HostListener('click') changeColor () {

    if (this.index < this.colors.length) {
      this.e.nativeElement.style.color = this.colors[this.index];
      this.messageEmitter.emit(this.colors[this.index++]);
    }
    else {
        this.index = 0;
        this.e.nativeElement.style.color = this.colors[this.index];
      this.messageEmitter.emit(this.colors[this.index++]);
    }
  }

}
