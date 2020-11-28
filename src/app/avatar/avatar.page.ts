import { Component, OnInit } from '@angular/core';
import { DisplayNameLocation } from '@ionngx/firebase-auth-ui';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  public canSignIn = true;
  public canSignOut = true;
  public canSignUp = true;
  public canViewProfile = true;
  public displayNameLocation = DisplayNameLocation.Below;
  public hideWhenAnonymous = false;
  public selectedMode: 'default' | 'simple' = 'default';
  public showDisplayName = false;

  constructor() { }

  public ngOnInit() {
  }
}
