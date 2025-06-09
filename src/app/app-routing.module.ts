import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './MyComponent/registration/registration.component';

const routes: Routes = [
   { path:'RegistrationForm', component:RegistrationComponent, pathMatch: "full" },
 
{path:'',component:RegistrationComponent, pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
