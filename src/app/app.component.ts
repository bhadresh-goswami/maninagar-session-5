import { Component } from '@angular/core';
import { UserModel } from './Models/user-model';
import {EmailValidatorN} from './emailvalidator.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:UserModel = new UserModel();

  title = 'appTestNew';
  SaveRegistration(){
    alert("Work Complete!");
  }
}
