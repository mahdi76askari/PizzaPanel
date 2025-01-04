import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const accessGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    window.location.replace('auth/login');
    return false;
  }
};
