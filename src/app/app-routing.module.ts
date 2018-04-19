import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewestComponent} from "./components/newest/newest.component";
import {MostCommentedComponent} from "./components/most-commented/most-commented.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'newest',
    pathMatch: 'full'
  },
  {
    path: 'newest',
    component: NewestComponent
  },
  {
    path: 'most-commented',
    component: MostCommentedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
