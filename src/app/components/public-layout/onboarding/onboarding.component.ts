import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportComponent } from '@shared/customer-support/customer-support.component';
import { TdsPaymentComponent } from '@shared/tds-payment/tds-payment.component';
import { GetStartedComponent } from '@shared/get-started/get-started.component';
import { MoneywithdrawProcessComponent } from '@shared/moneywithdraw-process/moneywithdraw-process.component';
import { FlowsComponent } from '@shared/flows/flows.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    CustomerSupportComponent,
    TdsPaymentComponent,
    GetStartedComponent,
    MoneywithdrawProcessComponent,
    FlowsComponent,
  ],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
  public supportSection: any = {
    title: 'Need Help?',
    text: 'Have some technical questions? Hit us up on live chat or whatever.',
    btn: 'GET SUPPORT',
    btnLink: '#',
  };
  constructor() {}

  ngOnInit(): void {}
}
