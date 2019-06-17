// 2. アプリケーションのコードが初めて入ってくる。
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dott sample';
  public subTitle = 'カンタン、とどける。';

  public changeTitle() {
    this.title = 'dott';
  }
}
