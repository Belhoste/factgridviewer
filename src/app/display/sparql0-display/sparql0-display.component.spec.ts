import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparql0DisplayComponent } from './sparql0-display.component';

describe('Sparql0DisplayComponent', () => {
  let component: Sparql0DisplayComponent;
  let fixture: ComponentFixture<Sparql0DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Sparql0DisplayComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sparql0DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
