// 1. ここで、いろいろなモジュールを読み込んでいく
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 3. 素の状態のAngularにはないフォームの操作系のモジュールを読み込んでくる
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleAComponent } from './pages/sample-a/sample-a.component';
import { SampleBComponent } from './pages/sample-b/sample-b.component';
import { UserListComponent } from './elements/user-list/user-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SampleAComponent,
    SampleBComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
