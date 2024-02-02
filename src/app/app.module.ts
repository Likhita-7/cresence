import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { TresurehuntComponent } from './tresurehunt/tresurehunt.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NewparticipantsComponent } from './newparticipants/newparticipants.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { ProjectexpoComponent } from './projectexpo/projectexpo.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    HomeComponent,
    TresurehuntComponent,
    RegisterComponent,
    NewparticipantsComponent,
    HackathonComponent,
    ProjectexpoComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
