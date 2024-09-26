import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { ResponseSupplier, Supplier } from '../../model/supplier.model';
import { SupplierHttpService } from '../../services/supplier-http.service';
import { CreateOrEditSupplierComponent } from "../create-or-edit-supplier/create-or-edit-supplier.component";

@Component({
  selector: 'app-list-supplier',
  standalone: true,
  imports: [CommonModule, CreateOrEditSupplierComponent],
  templateUrl: './list-supplier.component.html',
  styleUrl: './list-supplier.component.css'
})
export class ListSupplierComponent {
    public suppliers !: Signal<ResponseSupplier>
    public supplierValue = signal<Supplier>( {} as Supplier)
    private supplierHttpService = inject(SupplierHttpService)
    private environmentInjector = inject(EnvironmentInjector)

    constructor(){
        this.suppliers = this.supplierHttpService.toSignaSupplier()
    }

    public realoadSuppliers(){
        runInInjectionContext(this.environmentInjector, ()=> {
            this.suppliers = this.supplierHttpService.toSignaSupplier()
        })
    }

    public setValueSupplier(supplier: Supplier){
        this.supplierValue.set(supplier)
    }
}
