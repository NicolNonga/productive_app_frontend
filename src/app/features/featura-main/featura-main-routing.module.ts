import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardMainComponent } from '../dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardMainComponent,
   //canActivate: [AuthGuard],  
    data: {
      title: "Página Principal",
      layout:{
        customLayout: true,
        layoutNavigationTop: true
      }
    }
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturaMainRoutingModule { }
