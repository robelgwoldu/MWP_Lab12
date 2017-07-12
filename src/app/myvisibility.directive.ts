import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input('boolValue') boolValue = true;

  constructor(private e: ElementRef, private r: Renderer) {}

  ngOnInit() {
      if (this.boolValue) {
        this.r.setElementStyle(this.e.nativeElement, 'display', 'none');
      }
  }



}
