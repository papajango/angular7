import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule } from '@angular/router';

const authRouts: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRouts)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
