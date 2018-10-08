import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { TosComponent } from './tos/tos.component'

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tos', component: TosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TosComponent
  ],
  imports: [
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
