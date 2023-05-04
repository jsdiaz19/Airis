import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsComponent } from '@pages/sales/statistics/statistics.component';
import { SalesRoutingModule } from '@pages/sales/sales.routing.module';

// modules
import { SharedModule } from '@shared/shared.module';
import { SalesComponent } from '@pages/sales/sales.component';

@NgModule({
    declarations: [
        SalesComponent,
        StatisticsComponent
    ],
    imports: [ 
        CommonModule,
        SalesRoutingModule,
        SharedModule 
    ]
})
export class SalesModule {}