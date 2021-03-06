import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(public ordersService: OrdersService) {}

  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];

  coffeeOrder = [];
  addCoffee = (coffee) => this.coffeeOrder.push(coffee);
  removeCoffee = (coffee) => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then((res) => {});

    setTimeout(() => {
      this.coffeeOrder = [];
      this.ordersService.requestSent = false;
    }, 3000);
  }

  getCoffeeOrders() {
    return;
  }

  ngOnInit(): void {}
}
