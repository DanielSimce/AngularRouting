import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onUsers(){
      this.router.navigate(['/users']);
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000);
  }
  onServers(){
    this.router.navigate(['/servers']);
  }

  onCreateUser(){
    this.router.navigate(['/createUser']);
  }
  onCreateServer(){
    this.router.navigate(['/createServer']);
  }

}
