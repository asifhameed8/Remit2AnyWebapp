import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-phone-number-edit',
  standalone: true,
  imports: [CommonModule, NgxMatIntlTelInputComponent, ReactiveFormsModule],
  templateUrl: './phone-number-edit.component.html',
  styleUrls: ['./phone-number-edit.component.scss'],
})
export class PhoneNumberEditComponent {
  phoneForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.phoneForm = this.formBuilder.group({
      phone: [''],
    });
  }
}
