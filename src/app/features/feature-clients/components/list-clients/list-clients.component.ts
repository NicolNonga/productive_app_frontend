import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { Clients, ResponseClients } from '../../model/clients.model';
import { ClientHttpService } from '../../service/client-http.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {
    public clients !: Signal<ResponseClients>
    public clientValues = signal<Clients>({} as Clients)
    private enviromentInjector = inject(EnvironmentInjector)
    private clientHttpService = inject(ClientHttpService)

    constructor(){
        this.clients = this.clientHttpService.toSignalClients()
    }

    public reloadClients(){
        runInInjectionContext(this.enviromentInjector, ()=>{
            this.clients = this.clientHttpService.toSignalClients()
        })
    }


    public setClient(client: Clients){
        this.clientValues.set(client)
    }
}
