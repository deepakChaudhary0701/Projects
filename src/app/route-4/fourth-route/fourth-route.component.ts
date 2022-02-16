import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-route',
  templateUrl: './fourth-route.component.html',
  styleUrls: ['./fourth-route.component.scss']
})
export class FourthRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateBack(){
    this.router.navigate(["/"]);
  }
}
