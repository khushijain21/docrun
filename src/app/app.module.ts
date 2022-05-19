import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { FormComponent } from './component/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './component/edit/edit.component';

const appRoutes : Routes = [
  {
    path:'', component: EmployeeDetailsComponent
  },
  { path: 'edit', component: EditComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeeDetailsComponent,
    FormComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
