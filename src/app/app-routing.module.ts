import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileExcelComponent } from './components/file-excel/file-excel.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: FileExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
