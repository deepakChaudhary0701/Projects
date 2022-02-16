import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit {
  
  @Input() clickCount: { 'startCount': number, 'pauseCount': number } = { 'startCount': 0, 'pauseCount': 0 };
  constructor() { }

  ngOnInit(): void {
  }

}
