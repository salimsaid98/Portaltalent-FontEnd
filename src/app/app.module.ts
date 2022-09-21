import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavComponent } from './compo/nav/nav.component';
import { ListComponent } from './compo/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './compo/table/table.component';
import { FormsModule } from '@angular/forms';

import { UserNavComponent } from './User/user-nav/user-nav.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { UserDarshComponent } from './User/user-darsh/user-darsh.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './User/modal/modal.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddEducationComponent } from './User/add-education/add-education.component'; 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    TableComponent,
  
    UserNavComponent,
    UserProfileComponent,
    UserDarshComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
    AddEducationComponent,

  


  ],
  imports: [
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
