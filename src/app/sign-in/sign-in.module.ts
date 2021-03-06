import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonngxFirebaseAuthUiModule } from '@ionngx/firebase-auth-ui';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    IonngxFirebaseAuthUiModule.forChild()
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
