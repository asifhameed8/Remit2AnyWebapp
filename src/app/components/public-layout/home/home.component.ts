import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from '@shared/clients/clients.component';
import { HomeAppComponent } from '@shared/home-app/home-app.component';
import { PaymentSolutionComponent } from '@shared/payment-solution/payment-solution.component';
import { ReviewComponent } from '@shared/review/review.component';
import { ReasonToChooseComponent } from '@shared/reason-to-choose/reason-to-choose.component';
import { TdsPaymentComponent } from '@shared/tds-payment/tds-payment.component';
import { CustomerSupportComponent } from '@shared/customer-support/customer-support.component';
import { WithdrawComponent } from '@shared/withdraw/withdraw.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ClientsComponent,
    HomeAppComponent,
    PaymentSolutionComponent,
    ReviewComponent,
    ReasonToChooseComponent,
    TdsPaymentComponent,
    CustomerSupportComponent,
    WithdrawComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public supportSection: any = {
    title: 'Awesome Customer Support',
    text: "Have you any query? Don't worry. We have great people ready to help you whenever you need it.",
    btn: 'FIND OUT MORE',
    btnLink: '#',
  };
  constructor() {}

  ngOnInit(): void {}
}
