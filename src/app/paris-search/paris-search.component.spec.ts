import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisSearchComponent } from './paris-search.component';

describe('ParisSearchComponent', () => {
  let component: ParisSearchComponent;
  let fixture: ComponentFixture<ParisSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParisSearchComponent]
    });
    fixture = TestBed.createComponent(ParisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
