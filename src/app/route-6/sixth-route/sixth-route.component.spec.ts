import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthRouteComponent } from './sixth-route.component';

describe('SixthRouteComponent', () => {
  let component: SixthRouteComponent;
  let fixture: ComponentFixture<SixthRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
