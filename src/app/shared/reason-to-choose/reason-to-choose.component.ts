import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-reason-to-choose',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './reason-to-choose.component.html',
  styleUrls: ['./reason-to-choose.component.scss'],
})
export class ReasonToChooseComponent implements OnInit {
  public appName : string = GlobalConstants.APP_NAME;

  constructor() {}

  ngOnInit(): void {}
}
