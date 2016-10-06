import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdditionalInfoComponent} from './additional-info/additional-info.component';

const routes: Routes = [
  {
  	path: '',
  	redirectTo : 'pokemon/unknownPokemon',
  	pathMatch: 'full'
  },
  {
    path: 'pokemon/:id',
    component: AdditionalInfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
