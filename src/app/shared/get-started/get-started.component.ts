import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
