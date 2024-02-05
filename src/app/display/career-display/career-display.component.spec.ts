import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDisplayComponent } from './career-display.component';

describe('CareerDisplayComponent', () => {
  let component: CareerDisplayComponent;
  let fixture: ComponentFixture<CareerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
