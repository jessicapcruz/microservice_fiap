import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AdvancedImageListComponent } from './advanced-image-list/advanced-image-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdvancedImageListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
