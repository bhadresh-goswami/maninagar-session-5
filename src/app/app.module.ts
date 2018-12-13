import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator,EmailValidator  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './helper/directives/email-validator.directive';
import { EmailValidatorN } from './emailvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
EmailValidatorN  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmailValidatorDirective,
    EmailValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
