import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';

import { map, Observable } from 'rxjs';

import { LoginSuccessful } from '@core/interfaces/login-successful';
import { UserStorageService } from '@core/services/user-storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private URLBACKEND = environment.urlBackend;

    constructor(
        private http: HttpClient,
        private router: Router,
        private _userStorageService: UserStorageService
    ) {}

    login( email: string ): Observable<LoginSuccessful> {
        return this.http.post<LoginSuccessful>(`${ this.URLBACKEND }/login`, { email })
                        .pipe( map( response => {
                            this._userStorageService.setToken( response.token, 'Authorization' );
                            this.router.navigateByUrl('/shopping');
                            return response;
                        }));
    }
  
}