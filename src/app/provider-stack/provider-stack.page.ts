import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-provider-stack',
  templateUrl: './provider-stack.page.html',
  styleUrls: ['./provider-stack.page.scss'],
})
export class ProviderStackPage {
  public hideEmailPasswordButton = true;

  constructor(private toastController: ToastController) {}

  public async handleEmailPasswordSelected(): Promise<void> {
    const toast = await this.toastController.create({
      color: 'success',
      duration: 2000,
      message: 'Email/Password authentication was selected'
    });
    toast.present();
  }

}
