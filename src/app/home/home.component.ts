import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hoan Nguyen';
  public age = 20;
  public traiCay = ['Táo', 'Cam', 'Quýt', 'Thanh Long'];

  constructor() {}

  ngOnInit(): void {}
}
