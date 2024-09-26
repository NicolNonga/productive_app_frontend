import { Injectable, Signal, signal } from "@angular/core";
import { HttpHandleService } from "../../../core/http/http-handle.service";
import { finalize, Observable } from "rxjs";
import { ResponseTypePart, ResponseTypePartDropDwon } from "../model/type_part.model";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class TypePartHttService extends HttpHandleService{
    public isComplete = signal(false)

    public getTypeParts(): Observable<ResponseTypePart>{
        return this.GetAll('type_parts')
    }


  public getTypePartSelect (): Observable<ResponseTypePartDropDwon>{
    return this.GetAll('type_parts/dropdown')
  }

    public toSignalTypePart(): Signal<ResponseTypePart>{
        return toSignal(
            this.getTypeParts().pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseTypePart}

        )
    }
    public toSignalTypePartSelect(): Signal<ResponseTypePartDropDwon>{
        return toSignal(
            this.getTypePartSelect().pipe(finalize(()=>this.isComplete.set(true))),
            {initialValue: {} as ResponseTypePartDropDwon}

        )
    }
}
