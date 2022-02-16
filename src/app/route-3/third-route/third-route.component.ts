import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-route',
  templateUrl: './third-route.component.html',
  styleUrls: ['./third-route.component.scss']
})
export class ThirdRouteComponent implements OnInit {

  public clickCount: { 'startCount': number, 'pauseCount': number } = { 'startCount': 0, 'pauseCount': 0 };
  public startAt: string = "";
  public pauseAt: string = "";
  public inputTimerLimit: number = 0;
  public resetTimerStatus: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getClickCount($event: { 'startCount': number, 'pauseCount': number }) {
    this.clickCount = $event;
  }

  public getstartTime($event: string) {
    this.startAt = $event;
  }

  public getpauseTime($event: string) {
    this.pauseAt = $event;
  }

  public getTimeLimit($event: number) {
    this.inputTimerLimit = $event;
  }

  public getResetStatus($event: boolean) {
    this.resetTimerStatus = $event;
  }

  public navigateBack(){
    this.router.navigate(["/"]);
  }

}
