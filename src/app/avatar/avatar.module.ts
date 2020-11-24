import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonngxFirebaseAuthUiModule } from '@ionngx/firebase-auth-ui';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    IonngxFirebaseAuthUiModule.forChild()
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
