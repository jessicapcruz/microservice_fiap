import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'home'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'content-add',
    loadChildren: () => import('./content/content-add.module').then(m => m.ContentAddModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
