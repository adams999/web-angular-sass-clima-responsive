import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Target3DaysComponent } from './target3-days.component';

describe('Target3DaysComponent', () => {
  let component: Target3DaysComponent;
  let fixture: ComponentFixture<Target3DaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Target3DaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Target3DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
