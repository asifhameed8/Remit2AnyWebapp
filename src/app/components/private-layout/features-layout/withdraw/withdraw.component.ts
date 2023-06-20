import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from "./success/success.component";
import { ReviewComponent } from "./review/review.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { WithdrawAmountComponent } from "./withdraw-amount/withdraw-amount.component";
import { SelectCryptoComponent } from "./select-crypto/select-crypto.component";
import { StepperComponent } from "../../../../shared/stepper/stepper.component";
import { WithdrawService } from './withdraw.service';
import { MetamaskWalletService } from '@service/metatask-wallet.service';

interface Step {
    title: string;
    completed: boolean;
  }

@Component({
    selector: 'app-withdraw',
    standalone: true,
    templateUrl: './withdraw.component.html',
    styleUrls: ['./withdraw.component.scss'],
    imports: [CommonModule, SuccessComponent, ReviewComponent, ConfirmComponent, WithdrawAmountComponent, SelectCryptoComponent, StepperComponent],
    providers: [WithdrawService]
})
export class WithdrawComponent {
  @ViewChild('stepper', { static: true }) stepper: StepperComponent;
    mySteps: Step[] = [
        { title: 'Select Crypto', completed: false },
        { title: 'Withdraw', completed: false },
        { title: 'Confirm', completed: false },
        { title: 'Success', completed: false },
        { title: 'Review', completed: false }
      ];
      activeStep = 0;
      
    onStepChange(stepIndex: number): void {
    this.activeStep = stepIndex;

    }
}
