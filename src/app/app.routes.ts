import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    data: {
      title:"Pagina Principal",
      layout:{
        customLayout: true,
        layoutNavigationTop: true
      }
    },
    loadComponent : () => import('./features/dashboard-main/dashboard-main.component').then(mod=> mod.DashboardMainComponent)
  },
   {
    path : "login",
    data: {
      title:"Pagina Principal",
      layout:{
        customLayout: false,
        layoutNavigationTop: false
      }
    },
    loadComponent : () => import("./features/feature-authentication/login/login.component").then(mod => mod.LoginComponent)
   },
  {
    path:"logs",
   // canActivate: [AuthGuard],
    data: {
      title:"Pagina Principal",
      layout:{
        customLayout: true,
        layoutNavigationTop: true
      }
  },
  loadComponent : () => import('./features/feature-logs/componets/logs/logs.component').then(mod=> mod.LogsComponent)
},
{
  path: "acess_control/list-users",
  canActivate: [AuthGuard],
  data:{
    title: "Listagem todos os utilizadores",
    layout: {
      customLayout: true,
      layoutNavigationTop: true
    }

  },
  loadComponent : () => import("./features/feature-acess-control/components/list-users/list-users.component").then(comp=>comp.ListUsersComponent)
}
]


 