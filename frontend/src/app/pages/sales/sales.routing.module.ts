import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SalesComponent } from '@pages/sales/sales.component';
import { StatisticsComponent } from '@pages/sales/statistics/statistics.component';

const routes: Routes = [
    { 
        path: '', component: SalesComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'statistics' },
            { path: 'statistics', component: StatisticsComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'statistics' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule {}
