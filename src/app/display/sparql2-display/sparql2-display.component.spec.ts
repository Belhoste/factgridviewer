import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparql2DisplayComponent } from './sparql2-display.component';

describe('Sparl2DisplayComponent', () => {
  let component: Sparql2DisplayComponent;
  let fixture: ComponentFixture<Sparql2DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparql2DisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sparql2DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
