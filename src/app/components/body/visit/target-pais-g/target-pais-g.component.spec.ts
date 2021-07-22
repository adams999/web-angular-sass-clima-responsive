import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPaisGComponent } from './target-pais-g.component';

describe('TargetPaisGComponent', () => {
  let component: TargetPaisGComponent;
  let fixture: ComponentFixture<TargetPaisGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetPaisGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPaisGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
