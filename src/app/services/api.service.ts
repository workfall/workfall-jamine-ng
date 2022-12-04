import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './api.service.mock-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}products`);
  }
}
