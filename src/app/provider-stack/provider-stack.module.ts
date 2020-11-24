import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonngxFirebaseAuthUiModule } from '@ionngx/firebase-auth-ui';

import { ProviderStackPageRoutingModule } from './provider-stack-routing.module';

import { ProviderStackPage } from './provider-stack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderStackPageRoutingModule,
    IonngxFirebaseAuthUiModule.forChild()
  ],
  declarations: [ProviderStackPage]
})
export class ProviderStackPageModule {}
