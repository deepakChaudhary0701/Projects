import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(){
    return this.http.get('https://fakestoreapi.com/products').pipe(retry(1));
  }
}
