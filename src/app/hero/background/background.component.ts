import { Component, AfterViewInit } from '@angular/core';

declare var MorphingBG: any;  

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements AfterViewInit  {
  
  constructor() { }

  ngAfterViewInit(): void {
    new MorphingBG(document.querySelector('svg.bg'));
  }
}
