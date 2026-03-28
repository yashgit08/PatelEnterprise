import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'HP Laptop',
      price: 50000,
      image: 'assets/laptop.jpg'
    },
    {
      name: 'Dell Mouse',
      price: 500,
      image: 'assets/mouse.jpg'
    }
  ];
}
