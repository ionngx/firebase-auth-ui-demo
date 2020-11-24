import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringResourcesPage } from './string-resources.page';

const routes: Routes = [
  {
    path: '',
    component: StringResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StringResourcesPageRoutingModule {}
