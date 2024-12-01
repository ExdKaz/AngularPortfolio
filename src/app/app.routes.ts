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
        path: 'Projects',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
    },
    {
        path: 'About',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
    },
    {
        path: 'Skills',
        loadComponent: () => import('./app.component').then(m => m.AppComponent),
    }
];
