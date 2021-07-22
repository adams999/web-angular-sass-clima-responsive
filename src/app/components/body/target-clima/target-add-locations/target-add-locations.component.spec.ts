import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAddLocationsComponent } from './target-add-locations.component';

describe('TargetAddLocationsComponent', () => {
  let component: TargetAddLocationsComponent;
  let fixture: ComponentFixture<TargetAddLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetAddLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAddLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
