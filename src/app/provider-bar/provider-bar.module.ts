import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderBarModule } from '@ionngx/firebase-auth-ui';

import { ProviderBarPageRoutingModule } from './provider-bar-routing.module';

import { ProviderBarPage } from './provider-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderBarPageRoutingModule,
    ProviderBarModule
  ],
  declarations: [ProviderBarPage]
})
export class ProviderBarPageModule {}
