import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerFourComponent } from './countdown-timer-four.component';

describe('CountdownTimerFourComponent', () => {
  let component: CountdownTimerFourComponent;
  let fixture: ComponentFixture<CountdownTimerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
