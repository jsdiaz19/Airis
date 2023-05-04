import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '@pages/login/login.component';
import { CheckUserTokenGuard } from '@core/services/guards/check-user-token.guard';
import { CheckUserAuthGuard } from '@core/services/guards/check-user-auth.guard';

const routes: Routes = [
    { 
        path: '',         
        component: LoginComponent, 
        canActivate: [ CheckUserTokenGuard ] 
    },
    { 
        path: 'login',    
        component: LoginComponent, 
        canActivate: [ CheckUserTokenGuard ] 
    },
    { 
        path: 'shopping', 
        loadChildren: () => import('@pages/shopping/shopping.module').then( m => m.ShoppingModule ),
        canActivate: [ CheckUserAuthGuard ] 
    },
    {   path: 'sales',    
        loadChildren: () => import('@pages/sales/sales.module').then( m => m.SalesModule ),
        canActivate: [ CheckUserAuthGuard ]  
    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: '' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
