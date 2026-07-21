import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

// H8: shows/hides global spinner around every HTTP call
// finalize runs on both complete and error — correct place for cleanup
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.isLoading$.next(true);
  return next(req).pipe(finalize(() => loadingService.isLoading$.next(false)));
};
