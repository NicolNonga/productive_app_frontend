import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartToVehicleComponent } from './add-part-to-vehicle.component';

describe('AddPartToVehicleComponent', () => {
  let component: AddPartToVehicleComponent;
  let fixture: ComponentFixture<AddPartToVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPartToVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPartToVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
