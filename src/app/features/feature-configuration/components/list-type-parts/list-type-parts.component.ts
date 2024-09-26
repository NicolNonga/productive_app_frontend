import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { ResponseTypePart, TypePart } from '../../model/type_part.model';
import { TypePartHttService } from '../../services/type-part-http.service';
import { CommonModule } from '@angular/common';
import { CreateOrEditTypePartComponent } from '../create-or-edit-type-part/create-or-edit-type-part.component';

@Component({
  selector: 'app-list-type-parts',
  standalone: true,
  imports: [CommonModule, CreateOrEditTypePartComponent],
  templateUrl: './list-type-parts.component.html',
  styleUrl: './list-type-parts.component.css'
})
export class ListTypePartsComponent {
    public typeParts !: Signal<ResponseTypePart>
    public typePartValue = signal<TypePart>({} as TypePart)
    private typePartHttpService = inject(TypePartHttService)
    private environmentInjector = inject(EnvironmentInjector)

    constructor(){
        this.typeParts = this.typePartHttpService.toSignalTypePart()
    }

    public reloadTypeParts(){
        runInInjectionContext(this.environmentInjector, ()=>{
            this.typeParts = this.typePartHttpService.toSignalTypePart()
        })
    }

    public setValueTypePart(type_part: TypePart){
        this.typePartValue.set(type_part)
    }
}
