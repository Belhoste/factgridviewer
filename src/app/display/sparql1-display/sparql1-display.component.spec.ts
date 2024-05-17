import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparql1DisplayComponent } from './sparql1-display.component';

describe('Sparql1DisplayComponent', () => {
  let component: Sparql1DisplayComponent;
  let fixture: ComponentFixture<Sparql1DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparql1DisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sparql1DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
