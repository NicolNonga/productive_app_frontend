import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDesboardComponent } from './total-desboard.component';

describe('TotalDesboardComponent', () => {
  let component: TotalDesboardComponent;
  let fixture: ComponentFixture<TotalDesboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalDesboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalDesboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
