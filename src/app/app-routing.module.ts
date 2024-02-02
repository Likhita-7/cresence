import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TresurehuntComponent } from './tresurehunt/tresurehunt.component';
import { RegisterComponent } from './register/register.component';
import { NewparticipantsComponent } from './newparticipants/newparticipants.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { ProjectexpoComponent } from './projectexpo/projectexpo.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path:'tresurehunt', component:TresurehuntComponent},
  { path:'register' , component:RegisterComponent},
  { path: 'newpartcipants' , component: NewparticipantsComponent},
  { path:'register/:id' , component: RegisterComponent},
  { path:'hackathon' , component:HackathonComponent},
  { path:'projectexpo' , component:ProjectexpoComponent},
  { path:'login' , component:LoginComponent},
  { path:'contact' , component:ContactComponent},
  { path:'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
