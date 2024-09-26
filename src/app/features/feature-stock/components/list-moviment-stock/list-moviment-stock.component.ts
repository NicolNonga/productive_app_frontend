import { Component, EnvironmentInjector, Signal, inject, runInInjectionContext } from '@angular/core';
import { ResponseMomentStock } from '../../model/moviment-stock.model';

import { StockHttpService } from '../../service/stock-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-moviment-stock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-moviment-stock.component.html',
  styleUrl: './list-moviment-stock.component.css'
})
export class ListMovimentStockComponent {
   public movimentoStocks ! : Signal<ResponseMomentStock>
   public stockHttpService =  inject(StockHttpService)
   private envrionmentInjector = inject(EnvironmentInjector)


   constructor(){
    this.movimentoStocks = this.stockHttpService.toSignalMomentSotck()

   }

   public reloadMovimentStock(){
    runInInjectionContext(this.envrionmentInjector, ()=> {
        this.movimentoStocks = this.stockHttpService.toSignalMomentSotck()
    })
}


}
