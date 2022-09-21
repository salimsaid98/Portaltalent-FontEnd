import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './compo/list/list.component';
import { NavComponent } from './compo/nav/nav.component';
import { TableComponent } from './compo/table/table.component';
import { LoginComponent } from './User/login/login.component';
import { ModalComponent } from './User/modal/modal.component';
import { RegisterComponent } from './User/register/register.component';
import { UserDarshComponent } from './User/user-darsh/user-darsh.component';

import { UserNavComponent } from './User/user-nav/user-nav.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
{path:'',component:UserNavComponent,children:[
  {path:'',component:UserDarshComponent},
  {path:'profile',component:UserProfileComponent}
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
