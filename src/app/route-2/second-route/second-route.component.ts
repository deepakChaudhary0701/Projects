import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.scss']
})
export class SecondRouteComponent implements OnInit {

  public sortingOrder: string = "";
  public viewOrder: string = "grid";
  public sortingHeader :string = "Price : Random";

  constructor( public productService :ProductsService, private router: Router) { }

  ngOnInit(): void {}

  public sort(order: string){
    this.sortingOrder = order;
    if( order === 'asc'){
      this.sortingHeader = "Price: Low-High";
    }
    else if( order === 'desc'){
      this.sortingHeader = "Price: High-Low";
    }
    else {
      this.sortingHeader = "Price: Random";
    }
  }

  public switchView(view: string){
    if(view === 'grid'){
      this.viewOrder = 'grid';
    }
    else {
      this.viewOrder = 'list';
    }
  }

  public navigateBack(){
    this.router.navigate(['/']);
  }



}
