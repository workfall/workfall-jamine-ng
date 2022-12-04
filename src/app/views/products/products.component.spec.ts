import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ApiService } from 'src/app/services/api.service';
import { ApiServiceStub } from 'src/app/services/api.service.stub';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [
        SharedModule,
        MaterialModule
      ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiServiceStub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all products', () => {
    spyOn(component, 'getProducts').and.callThrough(); // the getProducts method will get products from the ApiService.
    component.ngOnInit();

    expect(component.getProducts).toHaveBeenCalled();
    expect(component.products).toBeTruthy();
  });
});
