import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-chat-with-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './chat-with-us.component.html',
  styleUrls: ['./chat-with-us.component.scss'],
})
export class ChatWithUsComponent {}
