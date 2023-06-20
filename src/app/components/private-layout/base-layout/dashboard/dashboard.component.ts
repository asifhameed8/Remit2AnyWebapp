import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCompletenessComponent } from '@shared/profile-completeness/profile-completeness.component';
import { TransactionsListComponent } from '@shared/transactions-list/transactions-list.component';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '@service/user.service';
import { SharedService } from '@service/shared.service';
import { PrivateLayoutService } from '@component/private-layout/private-layout.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCompletenessComponent,
    TransactionsListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SharedService],
})
export class DashboardComponent {
  public title = 'Recent Activity';
  public transactionsList: any[] | null;

  constructor(
    private readonly _sharedService: SharedService,
    private readonly _privateLayoutService: PrivateLayoutService
  ) {}
  ngOnInit(): void {
    this.getAllTransaction();
  }

  getAllTransaction() {
    this._sharedService.showLoader();
    this._privateLayoutService.getTransaction().subscribe({
      next: (res: any) => {
        this.transactionsList = res.slice(0, 5) || [];
      },
      error: (err: HttpErrorResponse) => console.log(err),
      complete: () => this._sharedService.hideLoader(),
    });
  }
}
