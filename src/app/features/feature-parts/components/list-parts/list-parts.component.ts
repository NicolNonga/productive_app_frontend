import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { Part, ResponsePart } from '../../model/part.model';
import { PartHttpService } from '../../service/part-http.service';
import { CreateOrEditPartComponent } from '../create-or-edit-part/create-or-edit-part.component';

@Component({
  selector: 'app-list-parts',
  standalone: true,
  imports: [CommonModule, CreateOrEditPartComponent],
  templateUrl: './list-parts.component.html',
  styleUrl: './list-parts.component.css'
})
export class ListPartsComponent {
    public parts ! : Signal<ResponsePart>
    public partValue = signal<Part>({} as Part)
    private partHttpService = inject(PartHttpService)
    private enviromentInjector = inject(EnvironmentInjector)

    constructor(){
        this.parts = this.partHttpService.toSignalPart()
    }

    public reloadParts(){
        runInInjectionContext(this.enviromentInjector, ()=>{
            this.parts = this.partHttpService.toSignalPart()
        })
    }

    public setPart(part: Part){
        this.partValue.set(part)
    }
}
