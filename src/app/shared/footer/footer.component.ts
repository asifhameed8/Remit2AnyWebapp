import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';
import { RouterLink } from '@angular/router';
import { GlobalConstants } from '@utils/global.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear: number = moment().year();
  public appName : string = GlobalConstants.APP_NAME;


  constructor() {}

  ngOnInit(): void {}
}
