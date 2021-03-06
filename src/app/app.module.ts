import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ServerFormComponent } from './server-form/server-form.component';
import { PduFormComponent } from './pdu-form/pdu-form.component';
import { ControlFormComponent } from './control-form/control-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerFormComponent,
    PduFormComponent,
    ControlFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
//    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
