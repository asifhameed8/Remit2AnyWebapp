import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perform-kyc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perform-kyc.component.html',
  styleUrls: ['./perform-kyc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformKycComponent {
  @Input() desc: string;
}
