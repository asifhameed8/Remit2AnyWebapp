// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  development: false,
  local: true,
  appURL: 'http://localhost:4200',
  usersUrl: 'http://localhost:8080/users',
  authenticationURL: 'https://dev.auth.remit2any.com',
  walletConnectSupportedNetworkChainId: 5,
};

/*
 * this is for running it in local with 8090 port for users and staging for keycloak server.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
