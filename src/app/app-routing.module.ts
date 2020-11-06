import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post-blog', component: PostBlogComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: BlogComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
