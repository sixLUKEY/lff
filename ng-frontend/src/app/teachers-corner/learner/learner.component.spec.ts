import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerComponent } from './learner.component';

describe('LearnerComponent', () => {
  let component: LearnerComponent;
  let fixture: ComponentFixture<LearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
