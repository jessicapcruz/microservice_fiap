import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { HomeModule } from './home/home.module';
import { ContentModule } from './content/content.module';
import { ContentAddModule } from './content/content-add.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    HomeModule,
    ContentModule,
    ContentAddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
