import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderStackPage } from './provider-stack.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderStackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderStackPageRoutingModule {}
