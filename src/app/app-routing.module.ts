import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule) },
  { path: 'work', loadChildren: () => import('./work/work.module').then((m) => m.WorkPageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutPageModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactPageModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
