import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementSearchComponent } from './statement-search.component';

describe('StatementSearchComponent', () => {
  let component: StatementSearchComponent;
  let fixture: ComponentFixture<StatementSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
