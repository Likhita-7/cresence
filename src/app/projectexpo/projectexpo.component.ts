import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectexpo',
  templateUrl: './projectexpo.component.html',
  styleUrls: ['./projectexpo.component.css']
})
export class ProjectexpoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['/register']);
  }


}
