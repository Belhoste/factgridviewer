import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchListComponent } from './advanced-search-list.component';

describe('AdvancedSearchListComponent', () => {
  let component: AdvancedSearchListComponent;
  let fixture: ComponentFixture<AdvancedSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSearchListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
