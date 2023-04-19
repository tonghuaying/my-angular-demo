import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { ValidatorComponent } from './components/validator/validator.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { FormMethodComponent } from './components/form-method/form-method.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FormDemoComponent,
    FormArrayComponent,
    ValidatorComponent,
    FormBuilderComponent,
    CheckboxComponent,
    RadioComponent,
    FormMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
