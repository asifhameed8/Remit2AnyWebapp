import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
