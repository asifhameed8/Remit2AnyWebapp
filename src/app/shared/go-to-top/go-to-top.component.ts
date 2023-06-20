import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss'],
})
export class GoToTopComponent {
  public isShow: boolean = false;
  private topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isShow = scrollPosition >= this.topPosToStartShowing ? true : false;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
