import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StringResourcesPageRoutingModule } from './string-resources-routing.module';

import { StringResourcesPage } from './string-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StringResourcesPageRoutingModule
  ],
  declarations: [StringResourcesPage]
})
export class StringResourcesPageModule {}
