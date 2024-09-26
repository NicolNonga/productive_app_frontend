import { Component, effect, inject, input, Signal, signal, model, NgModule } from '@angular/core';
import { RoleInterface } from '../../model/role.model';
import { PermissionInterface, ResponsePermissions } from '../../model/permission.model';
import { PermissionHttpService } from '../../services/hptt/permission.http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RoleHttpService } from '../../services/hptt/roles-http.service';

@Component({
  selector: 'app-add-permisson-to-role',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-permisson-to-role.component.html',
  styleUrl: './add-permisson-to-role.component.css'
})
export class AddPermissonToRoleComponent {
    role = input.required<RoleInterface>({alias:'role'})
    permissionHttpService = inject(PermissionHttpService)
    public roleHttpService = inject(RoleHttpService)
    permission: Signal<PermissionInterface [] | undefined> = signal<PermissionInterface []>([])
    public checked =  signal(false)
    constructor(){
        this.permission = this.permissionHttpService.toSginalDropDown()

        effect(()=> {
            console.log(this.checked())
        })
    }

    checkValueExist(permission_id:number): any{
        let check = false
        const permissionRole = this.role().permission
         if(permissionRole){
            check =  permissionRole.some(item => item.id === permission_id)
         }

         return check

    }

     checkValueChange(event:Event, permission_id: number ){
        const checkbox = event.target as HTMLInputElement
        const ischecked = checkbox.checked
        const role_id = this.role().id
       if(ischecked) {
        this.permissionHttpService.addPermissionRole(role_id, permission_id).subscribe((res)=>{
             console.log('sucesso')
        })
        return
       }

       console.log('role', this.role().id)
       this.permissionHttpService.deletePermissonRole({role_id, permission_id}).subscribe((res)=>{
        console.log('permisson removido com sucess')
       })
     }
}
