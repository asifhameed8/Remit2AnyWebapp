import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tds-payment',
  standalone: true,
  imports: [CommonModule, AnimationDirective, RouterLink],
  templateUrl: './tds-payment.component.html',
  styleUrls: ['./tds-payment.component.scss'],
})
export class TdsPaymentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
