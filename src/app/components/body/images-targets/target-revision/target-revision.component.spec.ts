import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetRevisionComponent } from './target-revision.component';

describe('TargetRevisionComponent', () => {
  let component: TargetRevisionComponent;
  let fixture: ComponentFixture<TargetRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
