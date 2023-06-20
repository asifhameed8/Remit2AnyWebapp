import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-payment-solution',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './payment-solution.component.html',
  styleUrls: ['./payment-solution.component.scss'],
})
export class PaymentSolutionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
