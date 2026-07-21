import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // H8: loading interceptor sets this
  isLoading$ = new BehaviorSubject<boolean>(false);
}
