import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehicleTypeComponent } from './list-vehicle-type.component';

describe('ListVehicleTypeComponent', () => {
  let component: ListVehicleTypeComponent;
  let fixture: ComponentFixture<ListVehicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVehicleTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
