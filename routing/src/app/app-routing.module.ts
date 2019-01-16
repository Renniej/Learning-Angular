import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'randomEmp', redirectTo : '/employees' },
  {path : 'departments' ,component : DeptListComponent},

  {//Child Routes
    path: 'departments/:id',
    component: DeptDetailsComponent,
    children : [

      {path : 'overview', component : DeptOverviewComponent},
      {path : 'contact', component : DeptContactComponent}


    ]
  },

  {path: 'employees', component :EmpListComponent},
  {path :'**' ,component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
