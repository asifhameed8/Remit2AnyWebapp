import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoToTopComponent } from '@shared/go-to-top/go-to-top.component';
import { HeaderComponent } from '@shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GoToTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'remit2any';
}
