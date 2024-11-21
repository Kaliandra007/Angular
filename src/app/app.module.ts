// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent // Declare o ItemListComponent aqui
  ],
  imports: [
    BrowserModule,
    FormsModule // Import FormsModule para suporte ao ngModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
