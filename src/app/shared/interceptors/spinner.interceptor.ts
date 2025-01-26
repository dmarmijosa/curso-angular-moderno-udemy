import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize } from 'rxjs';

export const SpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const _spinnerService = inject(SpinnerService);
  _spinnerService.show();

  return next(req).pipe(finalize(() => _spinnerService.hide()));
};
