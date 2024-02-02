import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userid: any;

  
  constructor(private _userservice: UserserviceService ,private activatedRoute :ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userid=data['id'];
    })
    
  }

  
  showNextButton : boolean= true;
  showSubmitButton :boolean=true;
  showUpdateButton :boolean=false;

  events=['all','Tresurehunt', 'project expo' , 'coding competation'];


  userModel = new User(0,'',0,'','');

  
  onSubmit(){
   
    
    this._userservice.enroll(this.userModel).subscribe((data: any) =>console.log('success', data),
                                                        (error: any) =>console.error('error',error));
                                                       
    console.log("there is no error");

  }

  
  next(event: Event) {
    // Prevent the default click behavior
    this.showNextButton=false;
    this.showSubmitButton=false;
    this.showUpdateButton=true;
    event.preventDefault();
    console.log("it is getting redirected to newparticipants");

    // Redirect to the next page
    this.router.navigate(['/newpartcipants']);
  }

  updateUser(user:User){
    
    
    this.userModel.id=this.userid;
    this._userservice.updateuser(this.userModel).subscribe((data: any) =>(window.alert("updated"),this.router.navigate(['/newpartcipants'])),
                                                      (error:any) =>console.log('error',error))
                                                      console.log(user); 
                                                                              
  }


}
