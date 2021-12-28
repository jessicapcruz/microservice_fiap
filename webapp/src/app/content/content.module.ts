import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { HomeRoutingModule } from './content-routing.module';
import { ContentComponent } from './components/content/content.component';
import { ContentListComponent } from './components/content-list/content-list.component';


@NgModule({
  declarations: [
    ContentComponent,
    ContentListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ],
  exports: []
})
export class ContentModule { }
