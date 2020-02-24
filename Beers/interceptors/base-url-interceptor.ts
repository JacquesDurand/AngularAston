import { Observable } from 'rxjs';
import { Injectable, InjectionToken } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

export const API_URL = new InjectionToken<string>('apiURL');

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const cloned = req.clone();

        return next.handle(cloned)
    }
}