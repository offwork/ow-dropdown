import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../projects/components/src/lib/components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
