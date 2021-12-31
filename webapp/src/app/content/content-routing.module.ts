import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContentAddComponent } from './components/content-add/content-add.component';

const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'content-add', component: ContentAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
