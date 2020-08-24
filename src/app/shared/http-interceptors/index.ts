import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { ToastrService } from 'ngx-toastr';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true, devs: [ToastrService] },
];