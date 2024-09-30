import { Component } from '@angular/core';
import { CreatePaymentsComponent } from '../create-payments/create-payments.component';
import { CommonModule } from '@angular/common';
import { CreateOrEditPartComponent } from "../../../feature-parts/components/create-or-edit-part/create-or-edit-part.component";

@Component({
  selector: 'app-list-payment',
  standalone: true,
  imports: [CreatePaymentsComponent, CommonModule, CreateOrEditPartComponent],
  templateUrl: './list-payment.component.html',
  styleUrl: './list-payment.component.css'
})
export class ListPaymentComponent {

}
