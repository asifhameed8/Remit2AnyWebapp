import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-hows-work',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './hows-work.component.html',
  styleUrls: ['./hows-work.component.scss'],
})
export class HowsWorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
