import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule, NgxCaptchaModule, ReactiveFormsModule],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  protected FormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.FormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  siteKey:string = "6Lf6O28mAAAAAAdvwPazbKY5Sq_dQKzL7jbt4yNc";
}
