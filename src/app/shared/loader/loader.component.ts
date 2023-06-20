import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '@service/shared.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  private _sharedService = inject(SharedService);
  public loader: BehaviorSubject<boolean>;

  ngOnInit(): void {
    this.loader = this._sharedService.loader;
  }

  ngOnDestroy(): void {
    this._sharedService.hideLoader();
  }
}
