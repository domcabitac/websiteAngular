import { Component, OnInit } from '@angular/core';
declare var checkAnimation: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new checkAnimation();
  }
}
