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
},
{
  path:"acess_control/list-permissions",
  data:{
    title: "Listagem todas permissões",
    layout: {
      customLayout: true,
      layoutNavigationTop: true
    }
  },
  loadComponent: () => import("./features/feature-acess-control/components/permission/permission.component").then(comp=>comp.PermissionComponent)
},
{
   path:'acess_control/list-roles',
   data:{
    title: "Listagem dos Perfil",
    layout: {
      customLayout: true,
      layoutNavigationTop: true
    }
  },
  loadComponent: ()=> import('./features/feature-acess-control/components/list-roles/list-roles.component').then((comp)=>comp.ListRolesComponent)
},
{
    path:'config/list-type_part',
    data:{
     title: "Listagem do Tipo de Peças",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-configuration/components/list-type-parts/list-type-parts.component').then((comp)=>comp.ListTypePartsComponent)
 },
 {
    path:'config/list-vehicle-type',
    data:{
     title: "Listagem do Tipo Ve",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-configuration/components/list-type-parts/list-type-parts.component').then((comp)=>comp.ListTypePartsComponent)
 },
 {
    path:'config/suppliers',
    data:{
     title: "Listagem do Tipo Ve",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-configuration/components/list-supplier/list-supplier.component').then((comp)=>comp.ListSupplierComponent)
 },
 {
    path:'vehicle/list',
    data:{
     title: "Listagem dos Veiculos",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-vehicles/components/list-vehicle/list-vehicle.component').then((comp)=>comp.ListVehicleComponent)
 },
 {
    path:'part/list',
    data:{
     title: "Listagem das Peças",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-parts/components/list-parts/list-parts.component').then((comp)=>comp.ListPartsComponent)
 },
 {
    path:'stock/list',
    data:{
     title: "Listagem dos Stock",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-stock/components/list-stock/list-stock.component').then((comp)=>comp.ListStockComponent)
 },
 {
    path:'stock/moviment',
    data:{
     title: "Listagem movimento stock",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-stock/components/list-moviment-stock/list-moviment-stock.component').then((comp)=>comp.ListMovimentStockComponent)
 },

 {
    path:'clients/list',
    data:{
     title: "Listagem dos Clientes",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/feature-clients/components/list-clients/list-clients.component').then((comp)=>comp.ListClientsComponent)
 },
 {
    path:'clients/payment',
    data:{
     title: "Listagem dos Clientes",
     layout: {
       customLayout: true,
       layoutNavigationTop: true
     }
   },
   loadComponent: ()=> import('./features/payments/components/list-payment/list-payment.component').then((comp)=>comp.ListPaymentComponent)
 }
]
