import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  public appName : string = GlobalConstants.APP_NAME;

  constructor() {}

  ngOnInit(): void {}
}
