import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-support',
  standalone: true,
  imports: [CommonModule, AnimationDirective, RouterLink],
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSupportComponent implements OnInit {
  @Input() info: any = {};
  constructor() {}

  ngOnInit(): void {}
}
