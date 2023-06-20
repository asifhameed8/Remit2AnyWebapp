import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { RouterLink } from '@angular/router';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-flows',
  standalone: true,
  imports: [CommonModule, AnimationDirective, RouterLink],
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss'],
})
export class FlowsComponent implements OnInit {
  public appName : string = GlobalConstants.APP_NAME;
  constructor() {}

  ngOnInit(): void {}
}
