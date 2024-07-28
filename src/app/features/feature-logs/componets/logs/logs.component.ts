import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject, runInInjectionContext, Signal } from '@angular/core';
import { ResponseLogs } from '../../models/logs.model';
import { LogsServiceHttp } from '../../services/http-services/logs-service.http';
import { TotalDesboardComponent } from '../../../dashboard-main/components/total-desboard/total-desboard.component';
import { ResponseDashboardLogInterface } from '../../../dashboard-main/models/dashboard-logs.model';
import { LogDashboardHttpService } from '../../../dashboard-main/services/http-service/log-dashboard.service.http';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule, TotalDesboardComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  public logs: Signal <ResponseLogs>
  public logHttpService = inject(LogsServiceHttp)
  public dashboardLogsService = inject(LogDashboardHttpService)
  public dasboard! : Signal <ResponseDashboardLogInterface>
  public environmentInjector = inject(EnvironmentInjector)
  constructor(){
      this.logs = this.logHttpService.toSignalLogs()
      this.dasboard = this.dashboardLogsService.toSignalDashboardLogs()
  }

  public realoadLogs(){
    runInInjectionContext(this.environmentInjector, ()=> {
      this.logs = this.logHttpService.toSignalLogs();
      this.dasboard= this.dashboardLogsService.toSignalDashboardLogs()
    })
  }
}
