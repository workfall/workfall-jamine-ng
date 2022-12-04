import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { MOCK_DATA } from './api.service.mock-data';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of products', (done) => {
    service = TestBed.inject(ApiService);

    service.getProducts().subscribe(data => {
      expect(data).toEqual(MOCK_DATA.products);
      done();
    })

    const testRequest = httpTestingController.expectOne('https://fakestoreapi.com/products');

    testRequest.flush(MOCK_DATA.products);
  });
});
