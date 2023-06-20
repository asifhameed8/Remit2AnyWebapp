import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-app',
  standalone: true,
  imports: [CommonModule, AnimationDirective, RouterLink],
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.scss'],
})
export class HomeAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
