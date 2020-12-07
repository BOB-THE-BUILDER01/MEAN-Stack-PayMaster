import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './main/profile/profile.component';
import { loginComponent } from './main/login/login.component';
import { SignupComponent } from './main/signup/signup.component';
import { LandingComponent } from './main/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { JobCodeComponent } from 'main/setup/jobcode.component';
import { LeaveCodeComponent } from '.main/setup/leavecode.component';
import { SalaryCodeComponent } from '.main/setup/salarycode.component';
import { EmployeeComponent } from '.main/setup/employee.component';


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: SignupComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'login',           component: loginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
    { path: 'signup', component: SignupComponent },
    { path: 'jobcode', component: JobCodeComponent, canActivate: [AuthGuard] },
    { path: 'leavecode', component: LeaveCodeComponent, canActivate: [AuthGuard] },
    { path: 'salarycode', component: SalaryCodeComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
