import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleAComponent } from './pages/sample-a/sample-a.component';
import { SampleBComponent } from './pages/sample-b/sample-b.component';

const routes: Routes = [{
  path: '', component: SampleAComponent,
}, {
  path: 'sub', component: SampleBComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
