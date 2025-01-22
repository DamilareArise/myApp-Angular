import { Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  {
    path:'add-blog',
    component:AddBlogComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'single-blog/:id',
    component:SingleBlogComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];
