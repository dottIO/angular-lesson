import { Component, EventEmitter, OnInit, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() userList: any;
  @Input() message: string;
  @Output() childToParent: EventEmitter<string> = new EventEmitter();

  private genderTexts = ['男', '女', '未回答'];

  constructor() { }

  ngOnChanges() {
    console.log(this.message);
    this.changeMessage();
  }

  ngOnInit() {
  }

  public changeMessage() {
    this.message = '子から親へ';
    this.childToParent.emit(this.message);
  }

  public unshift() {
    const unshift = this.userList.pop();
    this.userList.unshift(unshift);
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
