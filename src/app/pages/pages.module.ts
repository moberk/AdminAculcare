import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProgressComponent,
        Graphics1Component,
        DashboardComponent,
        PagesComponent
    ],
    exports: [
        ProgressComponent,
        Graphics1Component,
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
      ],
})
export class PagesModule {}
