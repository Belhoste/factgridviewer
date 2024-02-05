import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesDisplayComponent } from './sources-display.component';

describe('SourcesDisplayComponent', () => {
  let component: SourcesDisplayComponent;
  let fixture: ComponentFixture<SourcesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourcesDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourcesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
