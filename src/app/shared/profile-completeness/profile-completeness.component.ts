import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '@service/shared.service';
import { ProfileCompletness } from './profile-completness.model';
import { LoaderComponent } from '@shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';

@Component({
  selector: 'app-profile-completeness',
  standalone: true,
  imports: [CommonModule, LoaderComponent, RouterLink, NgOptimizedImage],
  templateUrl: './profile-completeness.component.html',
  styleUrls: ['./profile-completeness.component.scss'],
  providers: [SharedService],
})
export class ProfileCompletenessComponent implements OnInit {
  public profileInfo: ProfileCompletness | any;
  constructor(
    private readonly _sharedService: SharedService,
    private readonly _PrivateLayoutService: PrivateLayoutService
  ) {}

  ngOnInit(): void {
    this.getProfileSetupScore();
  }

  getProfileSetupScore(): void {
    this._sharedService.showLoader();
    this._PrivateLayoutService.getProfileSetupInfo().subscribe({
      next: (res: any) => {
        this.profileInfo = res;
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => this._sharedService.hideLoader(),
    });
  }
}
