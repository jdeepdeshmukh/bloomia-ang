import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent,
    children : [
      {
        path : "",
        component : ConfigurationComponent
      },
      {
        path : "profile",
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
