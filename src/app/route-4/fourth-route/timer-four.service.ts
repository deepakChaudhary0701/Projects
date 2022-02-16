import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerFourService {

  public clickCount: Subject<{ 'startCount': number , 'pauseCount': number}> = new Subject();
  public inputTimer: Subject<number> = new Subject();
  public startTimeList: string[] = [];
  public pauseTimeList: string[] = [];
  constructor() { }

 
}
