import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.css']
})
export class HackathonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['/register']);
  }


}
