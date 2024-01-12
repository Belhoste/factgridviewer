import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmoniaUniversalisComponent } from './harmonia-universalis.component';

describe('HarmoniaUniversalisComponent', () => {
  let component: HarmoniaUniversalisComponent;
  let fixture: ComponentFixture<HarmoniaUniversalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarmoniaUniversalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarmoniaUniversalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
