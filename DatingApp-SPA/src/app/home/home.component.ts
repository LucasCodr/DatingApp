import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle () {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
  getValues() {

    const controller = this;

    controller.http.get('http://localhost:5000/api/values/')
      .subscribe(res => {

        this.values = res;
      }, err => {

        console.log(err);
      });
  }
}
