import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-bank-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.scss'],
})
export class AddBankAccountComponent implements OnInit {
  public bacnkAccountForm: UntypedFormGroup;
  constructor(
    private readonly _formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.bacnkAccountForm = this._formBuilder.group({
      ifscCode: this._formBuilder.control(''),
      accountName: this._formBuilder.control(''),
      accountNumber: this._formBuilder.control(''),
      confirmAccountNumber: this._formBuilder.control(''),
      disclaimer: this._formBuilder.control(false, [Validators.requiredTrue]),
    });
  }

  addAccount() {
    console.log();
  }
}
