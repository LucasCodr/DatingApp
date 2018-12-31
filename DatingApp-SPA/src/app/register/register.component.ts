import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import notify from 'devextreme/ui/notify';
import alertify from 'alertifyjs';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  registerNameRules = [
    {
      type: 'required',
      message: 'Username is required.'
    }
  ];

  model = {
    username: '',
    password: ''
  };

  constructor(public authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    console.log(this.valuesFromHome);
  }

  register () {
    console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('Registration successful');
    }, error => {
      this.alertifyService.error(error);
      console.log(error);
    });
  }

  cancel () {
    this.cancelRegister.emit(false);
    this.alertifyService.message('Cancelled');
  }
}
