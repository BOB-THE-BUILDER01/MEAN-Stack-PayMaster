import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginAndRegistrationService } from './services/login-and-registration.service';
import { EmployeeService } from './services/employee-service.service';
import { SalaryService } from './services/salary-service.service';
import { JobService } from './services/job-service.service';
import { LeaveService } from './services/leave-service.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginAndRegistrationService, EmployeeService, SalaryService, JobService, LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
