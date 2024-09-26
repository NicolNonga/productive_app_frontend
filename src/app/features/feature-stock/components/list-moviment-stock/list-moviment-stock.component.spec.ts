import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovimentStockComponent } from './list-moviment-stock.component';

describe('ListMovimentStockComponent', () => {
  let component: ListMovimentStockComponent;
  let fixture: ComponentFixture<ListMovimentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMovimentStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMovimentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
