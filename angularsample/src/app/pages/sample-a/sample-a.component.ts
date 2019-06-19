import { Component, OnInit, OnChanges } from '@angular/core';
import { CalcCurrencyService } from 'src/app/services/calc-currency.service';
import { SampleBComponent } from '../sample-b/sample-b.component';

@Component({
  selector: 'app-sample-a',
  templateUrl: './sample-a.component.html',
  styleUrls: ['./sample-a.component.scss']
})
export class SampleAComponent implements OnInit {
  public pageTitle = 'Sample A';
  public totalCost = 1000000;
  public today = new Date();
  public message = '親から子へ';
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
  ) {
    this.pageTitle = 'Sample Const';
  }

  ngOnInit() {
    this.pageTitle = 'Sample On Init';

    // プリミティブ型 文字列, 数値
    const sampleA = 'こんにちは';
    let sampleB = sampleA;
    sampleB = 'こんばんは';
    console.log(sampleA);

    // 参照型 配列, オブジェクト
    const sampleArrA = ['こんにちは'];
    const sampleArrB = sampleArrA; // x => ['こんにちは'] o => sampleArrA
    sampleArrB[0] = 'こんばんは';

    console.log(sampleArrA);
  }

  eventTest(pageTitle) {
    // if (pageTitle.length > 10) {
    //   this.pageTitle = this.pageTitle.slice(0, 10);
    // }
  }

  check(e) {
    console.log(e);
    // console.log(this.message);

  }

}
