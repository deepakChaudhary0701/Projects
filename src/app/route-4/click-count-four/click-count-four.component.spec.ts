import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCountFourComponent } from './click-count-four.component';

describe('ClickCountFourComponent', () => {
  let component: ClickCountFourComponent;
  let fixture: ComponentFixture<ClickCountFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCountFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCountFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
