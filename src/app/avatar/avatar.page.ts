import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  public selectedMode: 'default' | 'simple' = 'default';
  public hideWhenAnonymous = false;
  public canSignIn = true;
  public canSignOut = true;
  public canSignUp = true;
  public canViewProfile = true;

  constructor() { }

  ngOnInit() {
  }

}
