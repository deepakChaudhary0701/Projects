import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseFourComponent } from './start-pause-four.component';

describe('StartPauseFourComponent', () => {
  let component: StartPauseFourComponent;
  let fixture: ComponentFixture<StartPauseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
