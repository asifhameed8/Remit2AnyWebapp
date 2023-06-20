import { Amplify } from 'aws-amplify';
import awsconfig from './aws-config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from 'app/app-routing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '@service/interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
});

Amplify.configure(awsconfig);
