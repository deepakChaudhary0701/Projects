import { Component, OnInit } from '@angular/core';
import { TimerFourService } from '../fourth-route/timer-four.service';

@Component({
  selector: 'app-countdown-timer-four',
  templateUrl: './countdown-timer-four.component.html',
  styleUrls: ['./countdown-timer-four.component.scss']
})
export class CountdownTimerFourComponent implements OnInit {
  
  public inputTimerlimit: number = 0;
  constructor(private timerService: TimerFourService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.timerService.inputTimer.subscribe( (limit) => {
      this.inputTimerlimit = limit;
    });
  }

}
