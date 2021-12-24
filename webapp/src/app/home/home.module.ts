import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { AdvancedImageListComponent } from './components/advanced-image-list/advanced-image-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdvancedImageListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ]
})
export class HomeModule { }
