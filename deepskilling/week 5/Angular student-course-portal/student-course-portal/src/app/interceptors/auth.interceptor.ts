import { HttpInterceptorFn } from '@angular/common/http';

// H8: adds Bearer token to every outgoing request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer mock-token-12345' } });
  return next(authReq);
};
