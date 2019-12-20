import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EymployeeListComponent } from './eymployee-list/eymployee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentDescriptionComponent } from './department-description/department-description.component';

const routes: Routes = [
  {path : '' , redirectTo :'/departments-list'  , pathMatch : 'full'},
  {path : 'departments-list' , component : DepartmentListComponent},
  {
    path : 'departments-list/:id' ,
    component : DepartmentDetailComponent ,
    children : [

        {path : 'discrpition', component : DepartmentDescriptionComponent }
    ]

  },
  {path : 'employees' , component : EymployeeListComponent},
  {path : '**' , component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,EymployeeListComponent,PageNotFoundComponent,
                                 DepartmentDetailComponent,DepartmentDescriptionComponent]
