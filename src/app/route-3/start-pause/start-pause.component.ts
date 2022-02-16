import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.scss']
})
export class StartPauseComponent implements OnInit {

  public timerLimit: number = 0;
  public timerStatus: boolean = false;
  public disableButton: boolean = false;
  public startAt: string = "";
  public pauseAt: string = "";
  public startCount: number = 0;
  public pauseStatus: boolean = false;
  public pauseCount: number = 0;
  public pauseLimitList: Array<number> = [];
  public pauseLimit: number = 0;
  public count: { 'startCount': number, 'pauseCount': number } = { 'startCount': 0, 'pauseCount': 0 };
  @Output() clickCount = new EventEmitter<{ 'startCount': number, 'pauseCount': number }>();
  @Output() startTime = new EventEmitter<string>();
  @Output() pauseTime = new EventEmitter<string>();
  @Output() timerLimitSet = new EventEmitter<number>();
  @Output() pauseStatusInfo = new EventEmitter<boolean>();
  @Output() resetTimerList = new EventEmitter<boolean>();
  public limit: any;
  @ViewChild('timerLimitInput')
  timerLimitInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  public startTimer(limit: string){
    if(+limit == 0 && limit == ""){
      this.disableButton = true;
      return;
    }
    this.startCount++;
    this.startAt = this.dateTimeFormatter();
    this.startTime.emit(this.startAt);
    this.timerStatus = true;
    this.pauseStatus = false;
    this.pauseStatusInfo.emit(this.pauseStatus);
    this.timerLimit = +limit;
    this.timerLimitSet.emit(this.timerLimit);
    this.calculateCount(this.startCount, this.pauseCount);
    this.changeTimerLimit(this.timerLimit, 'active');
  }

  public pauseTimer(){
    this.pauseCount++;
    this.pauseAt = this.dateTimeFormatter();
    this.pauseTime.emit(this.pauseAt);
    this.timerStatus = false;
    this.pauseStatus = true;
    this.pauseLimit = this.timerLimit;
    this.pauseStatusInfo.emit(this.pauseStatus);
    this.calculateCount(this.startCount, this.pauseCount);
    this.resetTimer('paused');
    setTimeout( () => {
      this.timerLimitSet.emit(this.pauseLimit);
      if(this.pauseLimit !== 0 && !this.pauseLimitList.includes(this.pauseLimit)){
        this.pauseLimitList.push(this.pauseLimit);
        this.pauseLimitList = this.pauseLimitList.length > 4 ? this.pauseLimitList.slice(-4) : this.pauseLimitList;
      }
    },1000);
    
  }

  public calculateCount(startCount: number, pauseCount: number){
    this.count = {
      'startCount': startCount,
      'pauseCount': pauseCount
    }
    this.clickCount.emit(this.count);
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

  public resetTimer(status: string){
    this.timerLimit = 0;
    this.disableButton = false;
    this.startCount = this.pauseCount = 0;
    this.timerLimitInput.nativeElement.value = status === 'inactive' ? "" : this.pauseLimit;
    if(status === 'inactive'){
    this.calculateCount(0,0);
    this.timerStatus = false;
    this.resetTimerList.emit(true);
    this.pauseLimitList = [];
    } 
    this.changeTimerLimit(0,status)
  }

  public changeTimerLimit(timerLimit: number, status: string) {
    if (this.timerLimit == 0 || status === 'paused' ) {
      clearInterval(this.limit);
      this.timerLimitSet.emit(this.timerLimit);
    }
    else {
      this.limit = setInterval(() => {
        this.timerLimit > 0 ? this.timerLimit-- : 0;
        this.timerLimitSet.emit(this.timerLimit);
         if(this.timerLimit == 0){
           clearInterval(this.limit);
           this.resetTimer('inactive');
         }
       }, 1000);
    }
  }

  ngOnDestroy(){
    this.startCount = this.pauseCount = 0;
  }
}
