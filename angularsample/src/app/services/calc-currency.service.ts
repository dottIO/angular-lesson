import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcCurrencyService {

  constructor() { }

  public getCurrencyText(num) {
    const numString = String(num);
    let result = '';
    let count = 1;
    for (let index = numString.length - 1; index >= 0; index--) {
      const element = numString[index];
      result = element + result;
      if ((count % 3) === 0) {
        result = ',' + result;
      }
      count++;
    }

    return '¥' + result;
  }

}
