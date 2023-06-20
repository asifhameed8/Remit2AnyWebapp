import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDirective } from '@directive/animation.directive';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, AnimationDirective],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
