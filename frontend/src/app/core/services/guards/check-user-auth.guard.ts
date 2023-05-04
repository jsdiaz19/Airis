import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserStorageService } from '@core/services/user-storage.service';

@Injectable({
    providedIn: 'root'
})
export class CheckUserAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private _userStorageService: UserStorageService
    ){} 

    canActivate(): boolean {
        if ( !this._userStorageService.getToken('Authorization') ) {
            this.router.navigateByUrl('/login');
            return false; 
        }
        
        return true;
    }
}
