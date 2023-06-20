import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { RouterLink } from '@angular/router';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-moneywithdraw-process',
  standalone: true,
  imports: [CommonModule, AnimationDirective, RouterLink],
  templateUrl: './moneywithdraw-process.component.html',
  styleUrls: ['./moneywithdraw-process.component.scss'],
})
export class MoneywithdrawProcessComponent implements OnInit {
  public appName : string = GlobalConstants.APP_NAME;

  constructor() {}

  ngOnInit(): void {}
}
