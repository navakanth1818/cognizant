import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // H7: hardcoded for guard demo — set to false to test redirect
  isLoggedIn = true;
}
