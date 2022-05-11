import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private foods: string[] = ["Rice", "Beans", "Pizza"];
  public clients: Client[] = [];
  private name!: string;
  private age!: number;
  private food!: string;
  private editClient!: Client;
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.editClient == null) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    }
    this.age = 0;
    this.name = "";
    this.food = "";
  }
  edit() {

  }
}