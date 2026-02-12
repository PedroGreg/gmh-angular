import { Routes } from '@angular/router';
import { LandingPage } from './features/landing-page/landing-page';
import { Cadastro } from './features/cadastro/cadastro';
import { Login } from './features/login/login';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage
    },
    {
        path: 'GMHSupport',
        component: LandingPage
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'login',
        component: Login
    }
];
