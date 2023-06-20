import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-get-app',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './get-app.component.html',
  styleUrls: ['./get-app.component.scss'],
})
export class GetAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
