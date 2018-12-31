import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  loginRules = [
    {
      type: 'required',
      message: 'Username is required'
    },

    {
      type: 'pattern',
      pattern: /^[^0-9]+$/,
      message: 'Do not use digits in the Name.'
    }
  ];

  passwordRules = [
    {
      type: 'required',
      message: 'Password is required'
    },
    {
      type: 'stringLength',
      min: 8,
      message: '8 digitos carai'
    }
  ];

  menuItems = [{
    name: 'Options',
    items: [
      { name: 'Edit profile', action: 'profile', icon: 'edit' },
      { name: 'Log out',  action: 'logout', icon: 'runner' }
    ]
  }];

  disabled = true;

  constructor(public authService: AuthService, private notifyService: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn () {
    return this.authService.loggedIn();
  }

  logOut () {
    localStorage.removeItem('token');
    this.notifyService.message('Successfully logged out');
  }

  itemClick(e) {
    switch (e.itemData.action) {
      case 'profile':
        window.location.href = '#';
        break;
      case 'logout':
        this.logOut();
        break;
    }
  }

  send(e) {
    const result = e.validationGroup.validate();

    if (result.isValid) {

      this.authService.login(this.user).subscribe(next => {
        this.notifyService.success('Successfully logged in');
      }, error => {
        console.log(error);
        this.notifyService.error(error);
      });
      console.log(this.user);
    }
  }

  onFormSubmit = function (e) {
    e.preventDefault();
  };
}
