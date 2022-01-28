import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildItemComponent } from './components/child-item/child-item.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListOneUserComponent } from './components/users/list-one-user/list-one-user.component';
import { FileExcelComponent } from './components/file-excel/file-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildItemComponent,
    UserFormComponent,
    AddUserComponent,
    ListOneUserComponent,
    FileExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
