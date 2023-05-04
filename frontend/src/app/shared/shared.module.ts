import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@angular-material/angular-material.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { AddMarkerComponent } from '@shared/components/modals/add-marker/add-marker.component';

@NgModule({
    declarations: [
        HeaderComponent,
        AddMarkerComponent
    ],
    imports: [ 
        CommonModule,
        AngularMaterialModule,
        RouterModule,
        ReactiveFormsModule 
    ],
    exports: [
        AngularMaterialModule,
        HeaderComponent 
    ]
})
export class SharedModule {}