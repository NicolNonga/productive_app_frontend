import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditVehicleComponent } from './create-or-edit-vehicle.component';

describe('CreateOrEditVehicleComponent', () => {
  let component: CreateOrEditVehicleComponent;
  let fixture: ComponentFixture<CreateOrEditVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
