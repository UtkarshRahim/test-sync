import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DocumentEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
