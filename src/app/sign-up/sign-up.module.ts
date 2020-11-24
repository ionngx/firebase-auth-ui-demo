import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonngxFirebaseAuthUiModule } from '@ionngx/firebase-auth-ui';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    IonngxFirebaseAuthUiModule.forChild()
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
