import { Component, OnInit } from '@angular/core';
import { Loginmodel } from '../loginmodel';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginserviceService) { }

  ngOnInit(): void {
  }

  loginModel= new Loginmodel(0,'','');
  
  onSubmit(){
    console.log(this.loginModel);

    this.loginservice.login(this.loginModel).subscribe((data:any)=>(data: any) =>console.log('success', data),(error: any) =>console.error('error',error));

      
  }
 
}
