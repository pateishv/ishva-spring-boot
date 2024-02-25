import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
