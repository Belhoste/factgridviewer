import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparql3DisplayComponent } from './sparql3-display.component';

describe('Sparql3DisplayComponent', () => {
  let component: Sparql3DisplayComponent;
  let fixture: ComponentFixture<Sparql3DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparql3DisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sparql3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
