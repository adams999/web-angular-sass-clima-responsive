import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTargetsComponent } from './images-targets.component';

describe('ImagesTargetsComponent', () => {
  let component: ImagesTargetsComponent;
  let fixture: ComponentFixture<ImagesTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesTargetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
