import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  public appName : string = GlobalConstants.APP_NAME;

  constructor() {}

  ngOnInit(): void {}
}
