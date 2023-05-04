import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserStorageService } from '@core/services/user-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(
    private router: Router,
    private _userStorageService: UserStorageService
  ) { }

  logout() {
    this._userStorageService.removeToken('Authorization');
    this.router.navigateByUrl('/login');
  }

}
