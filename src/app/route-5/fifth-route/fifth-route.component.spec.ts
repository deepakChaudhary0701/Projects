import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthRouteComponent } from './fifth-route.component';

describe('FifthRouteComponent', () => {
  let component: FifthRouteComponent;
  let fixture: ComponentFixture<FifthRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
