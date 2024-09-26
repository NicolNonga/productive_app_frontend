import { Component, EventEmitter, inject, Output, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StockForm } from '../../model/stock.model';
import { PartHttpService } from '../../../feature-parts/service/part-http.service';
import { Part } from '../../../feature-parts/model/part.model';
import { Supplier } from '../../../feature-configuration/model/supplier.model';
import { SupplierHttpService } from '../../../feature-configuration/services/supplier-http.service';

@Component({
  selector: 'app-create-or-edit-stock',
  standalone: true,
  imports: [],
  templateUrl: './create-or-edit-stock.component.html',
  styleUrl: './create-or-edit-stock.component.css'
})
export class CreateOrEditStockComponent {
    public isSubmitted: boolean = false
    public stockForm!:FormGroup
    public partHttpService= inject(PartHttpService)
    public supplierService = inject(SupplierHttpService)
    @Output() StockCreatedOrEdited = new EventEmitter<any>()
    public parts: Signal<Part [] | undefined> = signal<Part []>([])
    public suppliers: Signal<Supplier [] | undefined>= signal<Supplier []>([])

     constructor(){
        this.suppliers = this.supplierService.toSignaSupplierAll()
        this.parts = this.partHttpService.toSignalPartAll()
        this.createForm()
     }

    createForm(){
        this.stockForm = new FormGroup<StockForm>({
            partId : new FormControl(null, Validators.required),
            supplieId : new FormControl(null,Validators.required),
            quantity: new FormControl(null, Validators.required)
        })
    }

    get control(){
      return this.stockForm.controls
    }

    createStock(){
        this.isSubmitted = true
        if(this.stockForm.invalid) return
        this.partHttpService.Post('stock', this.stockForm.value).subscribe((res)=>{
            console.log("sucesso")
        })
    }
}
