import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import * as products from '../../../assets/data/products-data.json';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  public productsList: any = [];
  public randomProductList: Product[] = [];
  public listView: boolean = false;
  @Input() sortingOrder: string = "";
  @Input() viewOrder: string = "";

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productsList = (products as any).default;
    this.randomProductList = [...this.productsList];
  }

  ngOnChanges() {
    this.sortByPrice(this.sortingOrder);
    if (this.viewOrder === 'grid') {
      this.listView = false;
    }
    else {
      this.listView = true;
    }
  }

  public sortByPrice(order: string) {
    if (order === 'asc') {
      this.productsList.sort((a: any, b: any) => a.price - b.price);
    }
    else if (order === 'desc') {
      this.productsList.sort((a: any, b: any) => b.price - a.price);
    }
    else {
      this.productsList = [...this.randomProductList];
    }
  }


}
