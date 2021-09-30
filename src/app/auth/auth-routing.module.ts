import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children : [
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SignupComponent
      },
      {
        path : "forget",
        component : ForgetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
