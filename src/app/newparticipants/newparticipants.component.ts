import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newparticipants',
  templateUrl: './newparticipants.component.html',
  styleUrls: ['./newparticipants.component.css']
})
export class NewparticipantsComponent implements OnInit {

  constructor(private userservice: UserserviceService , private router:Router) { }

  allusers: User[]=[];

 

  ngOnInit(): void {
    this.getAllUsers();
    console.log("trying to get all users");
  }

  getAllUsers(){
    console.log("into getallusers method");
    this.userservice.allusers().subscribe(
      (data:User[]) =>{
                      this.allusers=data;
                      console.log(data);
                  },
      (error: any) =>{
                console.error(error);
      }
    );
  }

  deleteUser(id:number){

    console.log(id);
    this.userservice.deleteuser(id).subscribe(
      (data:any) =>{
        console.log("deleted");
        this.getAllUsers();


      }
    );
    
    
  }

  updateUser(user:User ,event:Event){
    const eid=user.id
    console.log("into user update method");
    event.preventDefault();
    this.router.navigate(['register',eid]);
    console.log(user);
    console.log(eid);
    console.log("leaving user update method");
    
    
  }




}
