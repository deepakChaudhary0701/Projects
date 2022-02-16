import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerFourService } from '../fourth-route/timer-four.service';

@Component({
  selector: 'app-start-pause-four',
  templateUrl: './start-pause-four.component.html',
  styleUrls: ['./start-pause-four.component.scss']
})
export class StartPauseFourComponent implements OnInit {

  public timerStatus: boolean = false;
  public clickCount: { 'startCount': number, 'pauseCount': number} = { 'startCount': 0, 'pauseCount': 0};
  public startCount: number = 0;
  public pauseCount: number = 0;
  public setTimerLimit: number = 0;
  public pauseLimit: number = 0;
  public startAt: string = "";
  public pauseAt: string = "";
  public inputLimit: any;
  public pauseLimitList: number[] = [];
  public disableButton: boolean = false;
  @ViewChild('timerLimitInput') timerLimitInput!: ElementRef;

  constructor(private timerService: TimerFourService) { }

  ngOnInit(): void {
  }

  public startNewTimer(limit: string){
    if(+limit == 0 && limit == ""){
      this.disableButton = true;
      return;
    }

    this.setTimerLimit = +limit;
    this.timerService.inputTimer.next(this.setTimerLimit);
     this.timerStatus = true;
     this.startCount++;
     this.startAt = this.dateTimeFormatter();
     this.timerService.startTimeList.push(this.startAt);
     this.calculateCount(this.startCount, this.pauseCount);
     this.changeTimer(this.setTimerLimit, 'active');
  }

  public pauseNewTimer(status: string){
    this.timerStatus = false;
    this.pauseCount++;
    this.pauseLimit = this.setTimerLimit;
    this.pauseAt = this.dateTimeFormatter();
    this.timerService.pauseTimeList.push(this.pauseAt);
    this.calculateCount(this.startCount, this.pauseCount);
    this.resetNewTimer('paused');
    if(this.pauseLimit !== 0 && !this.pauseLimitList.includes(this.pauseLimit)){
      this.pauseLimitList.push(this.pauseLimit);
      this.pauseLimitList = this.pauseLimitList.length > 4 ? this.pauseLimitList.slice(-4) : this.pauseLimitList;
    }
  }

  public resetNewTimer(status: string){
     this.setTimerLimit = 0;
     this.disableButton = false;
     this.timerLimitInput.nativeElement.value = status === 'inactive' ? "" : this.pauseLimit;   
     this.calculateCount(this.startCount, this.pauseCount);   
     if(status === 'inactive'){
      this.calculateCount(0,0);
      this.timerStatus = false;
      this.startCount = this.pauseCount = 0;
      this.changeTimer(0, "inactive");
      this.timerService.startTimeList.length = 0;
      this.timerService.pauseTimeList.length = 0;
      this.pauseLimitList.length = 0;
      } 
      this.changeTimer(this.pauseLimit, status);
  }

  public calculateCount(startCount: number, pauseCount: number){
    this.clickCount = {
      'startCount': startCount,
      'pauseCount': pauseCount
    }
    this.timerService.clickCount.next(this.clickCount);
  }

  public changeTimer(inputTimerLimit: number, status: string){
  if(inputTimerLimit == 0 || status === 'paused'){
    clearInterval(this.inputLimit);
    this.timerService.inputTimer.next(this.pauseLimit);
  }
  else{
    this.inputLimit = setInterval( () => {
      this.setTimerLimit > 0 ? this.setTimerLimit-- : 0; 
     this.timerService.inputTimer.next(this.setTimerLimit); 
      if(inputTimerLimit === 0 ){
        clearInterval(this.inputLimit);
        this.resetNewTimer('inactive');
      }
    },1000);  
  }   
  }

  public dateTimeFormatter(){
    let today = new Date();
    let currentDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    let currentTime = "";
    if(today.getHours() >= 12){
     currentTime = `${today.getHours() - 12}:${today.getMinutes()}:${today.getSeconds()} pm`;
    }
    else{
      currentTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} am`;
    }
    return currentDate + " " + currentTime;
  }

 

}
