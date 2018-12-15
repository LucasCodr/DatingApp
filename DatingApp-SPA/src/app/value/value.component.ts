import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {

    value: any;

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
