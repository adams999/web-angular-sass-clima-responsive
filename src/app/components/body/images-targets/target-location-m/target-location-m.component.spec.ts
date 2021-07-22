import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLocationMComponent } from './target-location-m.component';

describe('TargetLocationMComponent', () => {
  let component: TargetLocationMComponent;
  let fixture: ComponentFixture<TargetLocationMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetLocationMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetLocationMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
