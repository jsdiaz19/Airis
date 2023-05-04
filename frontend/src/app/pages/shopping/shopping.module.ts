import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from '@pages/shopping/projects/projects.component';
import { ShoppingRoutingModule } from '@pages/shopping/shopping.routing.module';
import { ShoppingComponent } from '@pages/shopping/shopping.component';

// modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        ShoppingComponent,
        ProjectsComponent
    ],
    imports: [ 
        CommonModule,
        ShoppingRoutingModule,
        SharedModule 
    ],
})
export class ShoppingModule {}