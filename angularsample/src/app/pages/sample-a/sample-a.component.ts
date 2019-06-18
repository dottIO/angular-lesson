import { Component, OnInit } from '@angular/core';
import { CalcCurrencyService } from 'src/app/services/calc-currency.service';

@Component({
  selector: 'app-sample-a',
  templateUrl: './sample-a.component.html',
  styleUrls: ['./sample-a.component.scss']
})
export class SampleAComponent implements OnInit {
  public pageTitle = 'Sample A';
  public totalCost = 1000000;
  public today = new Date();
  public users = [{
    name: 'shimizu',
    age: 35,
    gender: 'male'
  }, {
    name: 'tanaka',
    age: 26,
    gender: 'male'
  }, {
    name: 'fukumoto',
    age: 26,
    gender: 'male'
  }, {
    name: 'hosokawa',
    age: null,
    gender: 'female'
  }, {
    name: 'sample',
    age: 40,
    gender: 'unkown'
  }];

  constructor(
    public calcCurrencySvc: CalcCurrencyService
  ) { }

  ngOnInit() {
  }

}
