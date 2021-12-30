import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './components/content/content.component';
import { ContentListComponent } from './components/content-list/content-list.component';

import { ContentAddComponent } from './components/content-add/content-add.component';
import { MatSelectModule } from  '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent,
    ContentListComponent, 
    ContentAddComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule
  ],
  exports: []
})
export class ContentModule { }
