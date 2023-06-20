import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  async ngOnInit() {
    // // TODO Add custom messaging in the UI
    Hub.listen('auth', (data: any) => {
      switch (data.payload.event) {
        case 'signIn':
          this.goToDashboardPage();
          break;
        // case 'confirmSignUp':
        //   console.log('redirecting to dashboard');
        //   break;
        // case 'signUp':
        //   // this.refreshPage()
        //   break;
        // case 'signOut':
        //   // this._router.navigate(['/home']);
        //   break;
        // case 'signIn_failure':
        //   console.log('user sign in failed');
        //   break;
        // case 'configured':
        //   console.log('the Auth module is configured');
      }
    });
  }

  // Function to reload the application
  goToDashboardPage() {
    this._router.navigate(['/secure/dashboard']);
  }
}
