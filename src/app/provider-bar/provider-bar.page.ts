import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-provider-bar',
  templateUrl: './provider-bar.page.html',
  styleUrls: ['./provider-bar.page.scss'],
})
export class ProviderBarPage {
  public buttonColor = 'primary';
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
