import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetClimaComponent } from './target-clima.component';

describe('TargetClimaComponent', () => {
  let component: TargetClimaComponent;
  let fixture: ComponentFixture<TargetClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
