import { Component, input } from '@angular/core';
import { DumbComponent } from '../../../../core/components/dum-component/dumb-component.component';
import { DashboardLogInterface, ResponseDashboardLogInterface } from '../../models/dashboard-logs.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-desboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-desboard.component.html',
  styleUrl: './total-desboard.component.css'
})
export class TotalDesboardComponent  {
   totalLogs = input.required<DashboardLogInterface>()

}

