import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TimerFourService } from '../fourth-route/timer-four.service';

@Component({
  selector: 'app-click-count-four',
  templateUrl: './click-count-four.component.html',
  styleUrls: ['./click-count-four.component.scss']
})
export class ClickCountFourComponent implements OnInit, AfterViewInit {
   
  public clickCount: { 'startCount': number, 'pauseCount': number} = { 'startCount': 0, 'pauseCount': 0};
  constructor(private timerService: TimerFourService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.timerService.clickCount.subscribe( res => {
      this.clickCount = res;
    })
  }

}
