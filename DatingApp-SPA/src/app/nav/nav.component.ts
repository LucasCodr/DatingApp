import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../_services/auth.service';

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

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  itemClick(e) {
    switch (e.itemData.action) {
      case 'profile':
        window.location.href = '#';
        break;
      case 'logout':
        this.authService.logOut();
        break;
    }
  }

  send(e) {
    const result = e.validationGroup.validate();

    if (result.isValid) {

      this.authService.login(this.user).subscribe(next => {
        notify('Succesfully logged in', 'success');
      }, error => {
        console.log(error);
        notify('Error code: ' + error.error.status + ', ' + error.error.title, 'warning', 5000);
      });
      console.log(this.user);
    }
  }

  onFormSubmit = function (e) {
    e.preventDefault();
  };
}
