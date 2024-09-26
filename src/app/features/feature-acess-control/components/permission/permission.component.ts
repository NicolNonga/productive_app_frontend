import { Component, EnvironmentInjector, inject, runInInjectionContext, Signal } from '@angular/core';
import { ResponsePermissions } from '../../model/permission.model';
import { PermissionHttpService } from '../../services/hptt/permission.http.service';
import { CommonModule } from '@angular/common';
import { CreateOrEditPermissionComponent } from './create-or-edit-permission/create-or-edit-permission.component';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [CommonModule, CreateOrEditPermissionComponent],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.css'
})
export class PermissionComponent {
  public permissions!: Signal<ResponsePermissions>
  private permissionHttpService = inject(PermissionHttpService)
  private environmentInjector = inject(EnvironmentInjector);

  constructor(){
    this.permissions = this.permissionHttpService.toSginalPermissions()
  }

  public realoadPermissions(){
    runInInjectionContext(this.environmentInjector, ()=>{
      this.permissions = this.permissionHttpService.toSginalPermissions()
    })
  }

  public desablePermission(permission_id: number){
    this.permissionHttpService.desablePermission(permission_id).subscribe((response)=>{
         this.realoadPermissions()
    })
  }

  public enablePermission(permission_id: number): void {
     this.permissionHttpService.enablePermission(permission_id).subscribe((response)=> {
        this.realoadPermissions()
     })

  }
}
