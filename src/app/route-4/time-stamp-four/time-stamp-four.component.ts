import { Component, OnInit } from '@angular/core';
import { TimerFourService } from '../fourth-route/timer-four.service';

@Component({
  selector: 'app-time-stamp-four',
  templateUrl: './time-stamp-four.component.html',
  styleUrls: ['./time-stamp-four.component.scss']
})
export class TimeStampFourComponent implements OnInit {
  public startTimeList: string[] = [];
  public pauseTimeList: string[] = [];

  constructor(private timerService: TimerFourService) { }

  ngOnInit(): void { }

  ngAfterViewInit(){
    this.startTimeList = this.timerService.startTimeList;
    this.pauseTimeList = this.timerService.pauseTimeList;
  }

}
