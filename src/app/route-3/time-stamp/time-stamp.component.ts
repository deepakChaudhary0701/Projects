import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {
  @Input() startTime: string = "";
  @Input() pauseTime: string = "";
  public startTimeList: Array<string> = [];
  public pauseTimeList: Array<string> = [];
  @Input() resetTimerStatus: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(){
    if(this.startTime !== "" && !this.startTimeList.includes(this.startTime) ){
      this.startTimeList.push(this.startTime);
      if(this.startTimeList.length > 9){
        this.startTimeList = this.startTimeList.slice(-9);   
      }
    }
    
    if(this.pauseTime !== "" && !this.pauseTimeList.includes(this.pauseTime)){
      this.pauseTimeList.push(this.pauseTime);
      if(this.pauseTimeList.length > 9){
        this.pauseTimeList = this.pauseTimeList.slice(-9);   
      }
    }

    if(this.resetTimerStatus){
      this.startTimeList = [];
      this.pauseTimeList = [];
    }

  }

}
