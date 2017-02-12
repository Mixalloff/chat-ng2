import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { asap } from 'rxjs/scheduler/asap';
import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: AuthComponent },
  { path: 'chat', component: MainComponent },
  { path: '', component: MainComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);