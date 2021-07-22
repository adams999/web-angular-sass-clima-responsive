import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Days3Component } from './days3.component';

describe('Days3Component', () => {
  let component: Days3Component;
  let fixture: ComponentFixture<Days3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Days3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Days3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
