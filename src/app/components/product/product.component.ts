import { Component, Input, OnInit } from '@angular/core';
import { Product, Rating } from 'src/app/services/api.service.mock-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: Product | undefined;
  name: string | undefined;
  imageURL: string | undefined;
  description: string | undefined;
  category: string | undefined;
  rating: Rating | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.data?.title;
    this.imageURL = this.data?.image;
    this.description = this.data?.description;
    this.category = this.data?.category;
    this.rating = this.data?.rating;
  }

}
