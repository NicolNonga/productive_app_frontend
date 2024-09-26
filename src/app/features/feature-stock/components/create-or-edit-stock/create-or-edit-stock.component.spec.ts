import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditStockComponent } from './create-or-edit-stock.component';

describe('CreateOrEditStockComponent', () => {
  let component: CreateOrEditStockComponent;
  let fixture: ComponentFixture<CreateOrEditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOrEditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
