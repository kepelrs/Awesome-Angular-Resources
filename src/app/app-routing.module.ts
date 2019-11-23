import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './features/resources';
import { HomeComponent } from './features/home';
import { StarterKitsComponent } from './features/starter-kits';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'starter-kits',
    component: StarterKitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}