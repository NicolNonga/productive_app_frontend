import { Component, EnvironmentInjector, inject, runInInjectionContext, Signal } from '@angular/core';
import { ResponseStock } from '../../model/stock.model';
import { StockHttpService } from '../../service/stock-http.service';
import { CommonModule } from '@angular/common';
import { CreateOrEditStockComponent } from '../create-or-edit-stock/create-or-edit-stock.component';

@Component({
  selector: 'app-list-stock',
  standalone: true,
  imports: [CommonModule, CreateOrEditStockComponent],
  templateUrl: './list-stock.component.html',
  styleUrl: './list-stock.component.css'
})
export class ListStockComponent {
    public stocks ! : Signal<ResponseStock>
    public stockHttpService =  inject(StockHttpService)
    private envrionmentInjector =inject(EnvironmentInjector)

    constructor(){
        this.stocks = this.stockHttpService.toSignalStock()
    }
    public reloadStock(){
        runInInjectionContext(this.envrionmentInjector, ()=> {
            this.stocks = this.stockHttpService.toSignalStock()
        })
    }
}
