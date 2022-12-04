import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MOCK_DATA } from 'src/app/services/api.service.mock-data';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [
        SharedModule,
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a product', () => {
    component.data = MOCK_DATA.products[0]; // this will be data of type Product passed from parent

    component.ngOnInit();

    expect(component.name).toBeTruthy();
    expect(component.price).toBeTruthy();
    expect(component.imageURL).toBeTruthy();
    expect(component.description).toBeTruthy();
    expect(component.category).toBeTruthy();
    expect(component.rating).toBeTruthy();
  });
});
