import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/grocery';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  items: Items[] = [
    { name:'kiwi', quantity: 23, price: 50, done: true },
    { name:'grapes', quantity: 3, price: 65, done: true },
    { name:'milk', quantity: 1, price: 15, done: true },
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
