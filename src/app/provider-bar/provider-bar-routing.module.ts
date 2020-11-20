import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderBarPage } from './provider-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderBarPageRoutingModule {}
