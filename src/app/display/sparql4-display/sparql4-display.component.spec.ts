import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparql4DisplayComponent } from './sparql4-display.component';

describe('Sparql4DisplayComponent', () => {
  let component: Sparql4DisplayComponent;
  let fixture: ComponentFixture<Sparql4DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparql4DisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sparql4DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
