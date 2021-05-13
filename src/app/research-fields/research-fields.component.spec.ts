import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFieldsComponent } from './research-fields.component';

describe('ResearchFieldsComponent', () => {
  let component: ResearchFieldsComponent;
  let fixture: ComponentFixture<ResearchFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
