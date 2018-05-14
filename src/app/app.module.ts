import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { SimpleKnobsComponent } from './knobs.component';
import { AllKnobsComponent } from './all-knobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SimpleKnobsComponent,
    AllKnobsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
