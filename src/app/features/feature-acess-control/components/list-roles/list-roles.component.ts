import { Component, EnvironmentInjector, inject, runInInjectionContext, signal, Signal } from '@angular/core';
import { ResponseRoles, RoleInterface } from '../../model/role.model';
import { RoleHttpService } from '../../services/hptt/roles-http.service';
import { CommonModule } from '@angular/common';
import { CreateOrEditRoleComponent } from '../create-or-edit-role/create-or-edit-role.component';
import { AddPermissonToRoleComponent } from "../add-permisson-to-role/add-permisson-to-role.component";

@Component({
  selector: 'app-list-roles',
  standalone: true,
  imports: [CommonModule, CreateOrEditRoleComponent, AddPermissonToRoleComponent],
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.css'
})
export class ListRolesComponent {
    public roles !: Signal<ResponseRoles>
    private roleHttpService= inject(RoleHttpService)
    private environmentInjector = inject(EnvironmentInjector)
    public roleSelected= signal<RoleInterface>({} as RoleInterface)
    constructor(){
        this.roles = this.roleHttpService.toSignalRoles();

}

    public reloadRoles(){
        runInInjectionContext(this.environmentInjector, ()=>{
            this.roles = this.roleHttpService.toSignalRoles()
        })
    }
    public desableRole(role_id: number) {
        this.roleHttpService.desableRole(role_id).subscribe((res)=>{
            this.reloadRoles()
        })
    }
    public enableRole(role_id: number): void {
        this.roleHttpService.enableRole(role_id).subscribe((res)=>{
            this.reloadRoles()
        })
    }

    public addPermission(role: RoleInterface){
        this.roleSelected.set(role)
    }

}
