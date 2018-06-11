import { NgModule } from '@angular/core';

//Need to be included in the base module before getting going usually
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
@NgModule({
  /**
   * At run time:
   * 
   * 1. Angular gonna grap this module (on declaration)
   * 2. Handle the imports
   * 3. Bootstrap the app
   */
  //Registering the module
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  //Root module that instantiates angular app is the only module that needs a bootstrap option
  bootstrap: [AppComponent]
})
export class AppModule {}