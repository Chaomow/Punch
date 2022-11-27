import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayoffComponent } from './dayoff.component';

describe('DayoffComponent', () => {
  let component: DayoffComponent;
  let fixture: ComponentFixture<DayoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
