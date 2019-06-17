import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userList: any;

  private genderTexts = ['男', '女', '未回答'];

  constructor() { }

  ngOnInit() {
  }

  public getGenderClass(gender) {
    if (gender === 'male') {
      return 'maleText';
    }
    if (gender === 'female') {
      return 'femaleText';
    }
    if (gender === 'unkown') {
      return '';
    }
  }

  public getGenderText(gender) {
    if (gender === 'male') {
      return this.genderTexts[0];
    }
    if (gender === 'female') {
      return this.genderTexts[1];
    }
    if (gender === 'unkown') {
      return this.genderTexts[2];
    }
  }

}
