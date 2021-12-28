import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeRoutingModule } from './content-routing.module';
import { ContentAddComponent } from './components/content-add/content-add.component';


@NgModule({
  declarations: [
    ContentAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ],
  exports: []
})
export class ContentAddModule { }
