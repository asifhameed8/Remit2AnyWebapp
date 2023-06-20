import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

export const publicPagesGuard = async () => {
  const router = inject(Router);
  const result = await inject(UserService)
    .isLoggedIn()
    .then((x) => x);
  if (result) {
    router.navigate(['/secure/dashboard']);
    return;
  }
  return !result;
};

export const privatePagesGuard = async () => {
  const router = inject(Router);
  const result = await inject(UserService)
    .isLoggedIn()
    .then((x) => x);
  if (!result) {
    router.navigate(['home']);
    return;
  }
  return result;
};
