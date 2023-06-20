import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Auth } from 'aws-amplify';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '@service/user.service';
import { ClickOutSideDirective } from '@directive/click-out-side.directive';

const upperNavbarHeight = 84.73;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ClickOutSideDirective,
    NgbCollapseModule,
    NgbDropdownModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy, OnInit {
  private window: any;
  @ViewChild('header') navbar: ElementRef;
  public isMenuCollapsed = true;
  public user: any;
  public NonLoggedInRoutes = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Onboarding',
      url: '/onboarding',
    },
    {
      title: 'Help',
      url: '/help',
    },
  ];
  public LoggedInRoutes = [
    {
      title: 'Dashboard',
      url: '/secure/dashboard',
    },
    {
      title: 'Transactions',
      url: '/secure/transactions',
    },
    {
      title: 'KYC',
      url: '/secure/kyc',
    },
    {
      title: 'Withdraw',
      url: '/secure/withdraw',
    },
    {
      title: 'Help',
      url: '/help',
    },
  ];
  constructor(
    private readonly _renderer: Renderer2,
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly _router: Router,
    private readonly _userSerive: UserService
  ) {
    this.window = this._document.defaultView;
  }

  async ngOnInit() {
    this.user = this._userSerive.getUserInfo;
  }
  ngAfterViewInit(): void {
    this.window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    this.window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if (this.window.scrollY > upperNavbarHeight) {
      this._renderer.addClass(this.navbar.nativeElement, 'bgSecondary');
    } else {
      this._renderer.removeClass(this.navbar.nativeElement, 'bgSecondary');
    }
  };

  public async logout() {
    await Auth.signOut({ global: true }).then(() => {
      this._router.navigate(['/home']);
      this._userSerive.userDetail = null;
    });
  }
}
