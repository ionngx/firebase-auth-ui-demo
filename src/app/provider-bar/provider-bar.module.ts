import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonngxFirebaseAuthUiModule } from '@ionngx/firebase-auth-ui';

import { ProviderBarPageRoutingModule } from './provider-bar-routing.module';

import { ProviderBarPage } from './provider-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderBarPageRoutingModule,
    IonngxFirebaseAuthUiModule.forChild()
  ],
  declarations: [ProviderBarPage]
})
export class ProviderBarPageModule {}
