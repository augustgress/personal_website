import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


// canActivate: [AuthGuard]

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home-page', component: HomePageComponent },
  { path: 'home-page', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
