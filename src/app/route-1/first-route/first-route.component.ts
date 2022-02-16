import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-route',
  templateUrl: './first-route.component.html',
  styleUrls: ['./first-route.component.scss']
})
export class FirstRouteComponent implements OnInit {
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  public navigateBack(){
    this.router.navigate(["/"]);
  }

}
