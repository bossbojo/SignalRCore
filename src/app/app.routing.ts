import { Routes, RouterModule } from '@angular/router';

export const RoutesList: Routes = [
    {
        path: '',
        loadChildren: 'app/Pages/Home/Home.module#HomeModule'
    },
    {
        path: 'simple',
        loadChildren: 'app/Pages/Simple/Simple.module#SimpleModule'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
export const RoutingModule = RouterModule.forRoot(RoutesList);
