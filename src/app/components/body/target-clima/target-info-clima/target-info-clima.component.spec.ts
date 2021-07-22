import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetInfoClimaComponent } from './target-info-clima.component';

describe('TargetInfoClimaComponent', () => {
  let component: TargetInfoClimaComponent;
  let fixture: ComponentFixture<TargetInfoClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetInfoClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetInfoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
