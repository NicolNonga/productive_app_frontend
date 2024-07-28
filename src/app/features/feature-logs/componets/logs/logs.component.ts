import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { ResponseLogs } from '../../models/logs.model';
import { LogsServiceHttp } from '../../services/http-services/logs-service.http';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  public logs: Signal <ResponseLogs>
  public logHttpService = inject(LogsServiceHttp)
  constructor(){
      this.logs = this.logHttpService.toSignalLogs()
  }
}
