import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidwetTempComponent } from './widwet-temp.component';

describe('WidwetTempComponent', () => {
  let component: WidwetTempComponent;
  let fixture: ComponentFixture<WidwetTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidwetTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidwetTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
