import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    EmpListComponent,
    PageNotFoundComponent,
    HomeComponent,
    DeptDetailsComponent,
    DeptOverviewComponent,
    DeptContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routiungComponents = [DeptListComponent,EmpListComponent]