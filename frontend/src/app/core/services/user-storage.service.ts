import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {

    setToken( token: string, tokenName: string ) {
        localStorage.setItem(tokenName, token);
    }

    getToken( tokenName: string ): string | null {
        return localStorage.getItem(tokenName) || null;
    }

    removeToken( tokenName: string ) {
        localStorage.removeItem(tokenName);
    }
}