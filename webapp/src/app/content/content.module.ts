import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './components/content/content.component';
import { ContentListComponent } from './components/content-list/content-list.component';

import { ContentAddComponent } from './components/content-add/content-add.component';
import { MatSelectModule } from  '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { MatDividerModule } from '@angular//material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

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
    MatInputModule, 
    MatDividerModule, 
    MatIconModule, 
    MatListModule
  ],
  exports: []
})
export class ContentModule { }
