import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociabilityDisplayComponent } from './sociability-display.component';

describe('SociabilityDisplayComponent', () => {
  let component: SociabilityDisplayComponent;
  let fixture: ComponentFixture<SociabilityDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociabilityDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SociabilityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
