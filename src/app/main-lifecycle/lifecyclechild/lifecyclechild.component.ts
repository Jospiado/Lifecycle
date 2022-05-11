import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnInit {
  @Input() name!: string;
  @Input() age!: number;
  @Input() food!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
