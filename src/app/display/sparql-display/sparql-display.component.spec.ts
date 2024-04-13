import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparqlDisplayComponent } from './sparql-display.component';

describe('SparqlDisplayComponent', () => {
  let component: SparqlDisplayComponent;
  let fixture: ComponentFixture<SparqlDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SparqlDisplayComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparqlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
