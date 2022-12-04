import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/services/api.service.mock-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.apiService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}
