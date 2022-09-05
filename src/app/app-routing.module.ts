import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './compo/list/list.component';
import { NavComponent } from './compo/nav/nav.component';
import { TableComponent } from './compo/table/table.component';

const routes: Routes = [
  {path:'',component:NavComponent,children:[
    {path:'',component:TableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
