import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpQuestioningComponent } from '@shared/help-questioning/help-questioning.component';
import { ContactUsComponent } from '@shared/contact-us/contact-us.component';
import { ServicesComponent } from '@shared/services/services.component';
import { PopularTopicsComponent } from '@shared/popular-topics/popular-topics.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,
    ServicesComponent,
    HelpQuestioningComponent,
    ContactUsComponent,
    PopularTopicsComponent,
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
