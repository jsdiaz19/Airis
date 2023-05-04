import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShoppingComponent } from '@pages/shopping/shopping.component';
import { ProjectsComponent } from '@pages/shopping/projects/projects.component';

const routes: Routes = [
    { 
        path: '', component: ShoppingComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'projects' },
            { path: 'projects', component: ProjectsComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'projects' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {}
