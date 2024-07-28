import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TotalDesboardComponent } from "./components/total-desboard/total-desboard.component";
import { ResponseDashboardLogInterface } from './models/dashboard-logs.model';
import { LogDashboardHttpService } from './services/http-service/log-dashboard.service.http';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, TotalDesboardComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {
  public dashboardLog: Signal<ResponseDashboardLogInterface>
  public logDashboardService= inject(LogDashboardHttpService)
  constructor(){
    this.dashboardLog = this.logDashboardService.toSignalDashboardLogs();
    console.log(this.dashboardLog().data)
  }
}
