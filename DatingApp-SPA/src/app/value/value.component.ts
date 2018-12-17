import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {

    value: any;
    data: any = {
      name: '',
      password: '',
      email: ''
    };

    buttonOptions = {
        text: 'Register',
        type: 'success',
        useSubmitBehavior: true
    };

    onClick() {
      console.log(this.data);
      notify('hehe');
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {

      this.getValues();
    }

    getValues() {

      const controller = this;

      controller.http.get('http://localhost:5000/api/values/')
        .subscribe(res => {

          this.value = res;
        }, err => {

          console.log(err);
        });
    }
}
