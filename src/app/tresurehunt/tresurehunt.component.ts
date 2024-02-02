import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tresurehunt',
  templateUrl: './tresurehunt.component.html',
  styleUrls: ['./tresurehunt.component.css']
})
export class TresurehuntComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['/register']);
  }

}
