import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLocationSComponent } from './target-location-s.component';

describe('TargetLocationSComponent', () => {
  let component: TargetLocationSComponent;
  let fixture: ComponentFixture<TargetLocationSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetLocationSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetLocationSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
