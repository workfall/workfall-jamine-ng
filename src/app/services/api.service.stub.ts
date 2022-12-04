import { of } from "rxjs";
import { MOCK_DATA } from "./api.service.mock-data";

export class ApiServiceStub {
  getProducts() {
    return of(MOCK_DATA.products);
  }
}
