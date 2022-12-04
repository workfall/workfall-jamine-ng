import { Component, Input, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Product, Rating } from 'src/app/services/api.service.mock-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: Product | undefined;
  name: string | undefined;
  price: number | undefined;
  imageURL: string | undefined;
  description: string | undefined;
  category: string | undefined;
  rating: Rating | undefined;

  fullStars: number = 0;
  halfStarPresent: boolean = false;
  emptyStars: number = 0;

  fullStarsArr: number[] = [];
  emptyStarsArr: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.data?.title;
    this.price = this.data?.price;
    this.imageURL = this.data?.image;
    this.description = this.data?.description;
    this.category = this.data?.category;
    this.rating = this.data?.rating;

    if (this.rating) {
      this.formatRatings();
    }
  }

  formatRatings() {
    this.fullStars = Math.floor(this.rating?.rate as number);
    this.halfStarPresent = (this.rating?.rate as number - this.fullStars) > 0.5;

    this.emptyStars = this.halfStarPresent ? (5 - this.fullStars - 1) : (5 - this.fullStars);

    this.fullStarsArr = Array(this.fullStars);
    this.emptyStarsArr = Array(this.emptyStars);
  }

}
