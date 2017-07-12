import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
        <li *ngFor="let name of names; let i = index"> {{++i}} - {{name}}</li>
    </ul>
    <br>
    <ul>
        <li appUpper>Woldu</li>
        <li>Hagos</li>
        <li appMyvisibility [boolValue] = '4 > 3' >Habtegabir</li>
    </ul>
    <br><br>
    <Div appMycolor (messageEmitter) = "getCurrentColor($event)" [ngClass]="{mySize:true}" >Click me to change my color: {{currentColor}}</Div>`,

  styles: [ '.mySize { font-size: 24px;}' ]
})

export class AppComponent {
  title = 'app';
  private names = ["Goitom", "Rishan", "Robel", "Michaele", "Dawit", "Semhar", "Daniel", "Efrem", "Eden", "Simret", "Selam"];

  currentColor = "black";

  getCurrentColor(value) {
    this.currentColor = value;
  }
}
