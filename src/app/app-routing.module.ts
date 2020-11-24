import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'provider-bar',
    loadChildren: () => import('./provider-bar/provider-bar.module').then( m => m.ProviderBarPageModule)
  },
  {
    path: 'provider-stack',
    loadChildren: () => import('./provider-stack/provider-stack.module').then( m => m.ProviderStackPageModule)
  },
  {
    path: 'string-resources',
    loadChildren: () => import('./string-resources/string-resources.module').then( m => m.StringResourcesPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
