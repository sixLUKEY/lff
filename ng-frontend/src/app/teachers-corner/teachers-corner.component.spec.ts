import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersCornerComponent } from './teachers-corner.component';

describe('TeachersCornerComponent', () => {
  let component: TeachersCornerComponent;
  let fixture: ComponentFixture<TeachersCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersCornerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
