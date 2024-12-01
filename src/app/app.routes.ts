import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
        pathMatch: 'full'
    },
    {
        path: 'Home',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    },

    {
        path: '**',
        loadComponent: () => import('./components/unavailable/unavailable.component').then(m => m.UnavailableComponent),
    }
];
