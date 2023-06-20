import { environment } from './environments/environment';

const awsconfig: any = {
  // identityPoolId: 'https://remi2any.auth.us-east-1.amazoncognito.com',
  // REQUIRED - Amazon Cognito Identity Pool ID
  region: 'us-east-1', // REQUIRED - Amazon Cognito Region
  userPoolId: 'us-east-1_3RblGhOwR',

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolWebClientId: '33lq5o42pce8g000ljiiraf30e',

  // OPTIONAL - Amazon Cognito Web Client ID

  oauth: {
    domain: 'https://remi2any.auth.us-east-1.amazoncognito.com',

    // Authorized scopes
    scope: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],

    // Callback URL
    // redirectSignIn: 'https://localhost:4200',
    // Sign out URL
    // redirectSignOut: 'http://localhost:4200',

    // Callback URL
    redirectSignIn: environment.appURL,
    // Sign out URL
    redirectSignOut: environment.appURL,

    // 'code' for Authorization code grant,
    // 'token' for Implicit grant
    responseType: 'code',

    // optional, for Cognito hosted ui specified options

    options: {
      // Indicates if the data collection is enabled to support Cognito advanced security features.
      // By default, this flag is set to true.
      AdvancedSecurityDataCollectionFlag: true,
    },
  },
};

export default awsconfig;

/**
 * 
 * 
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_3RblGhOwR",
    "aws_user_pools_web_client_id": "33lq5o42pce8g000ljiiraf30e",
    "oauth": {
        "domain": "https://remi2any.auth.us-east-1.amazoncognito.com",
        "scope": [
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/dashboard",
        "redirectSignOut": "http://localhost:4200/",
        "responseType": "code"
    }
 */
