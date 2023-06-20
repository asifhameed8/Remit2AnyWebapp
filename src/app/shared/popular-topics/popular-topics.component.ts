import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-popular-topics',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, AnimationDirective],
  templateUrl: './popular-topics.component.html',
  styleUrls: ['./popular-topics.component.scss'],
})
export class PopularTopicsComponent {}
