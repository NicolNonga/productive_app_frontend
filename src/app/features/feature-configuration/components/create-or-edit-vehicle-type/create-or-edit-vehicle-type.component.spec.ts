import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditVehicleTypeComponent } from './create-or-edit-vehicle-type.component';

describe('CreateOrEditVehicleTypeComponent', () => {
  let component: CreateOrEditVehicleTypeComponent;
  let fixture: ComponentFixture<CreateOrEditVehicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditVehicleTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
