import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatWithUsComponent } from '@shared/chat-with-us/chat-with-us.component';
import { ConnectWalletComponent } from '@shared/connect-wallet/connect-wallet.component';
import { ProfilePictureComponent } from '@shared/profile-picture/profile-picture.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    CommonModule,
    ConnectWalletComponent,
    ChatWithUsComponent,
    RouterOutlet,
    ProfilePictureComponent,
  ],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {}
