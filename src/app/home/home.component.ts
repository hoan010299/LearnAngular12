import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hoan Nguyen';
  public age = 20;
  public traiCay = [
    {
      name: 'Táo',
      price: 20,
      haGia: true,
    },
    {
      name: 'Cam',
      price: 30,
      haGia: false,
    },
    {
      name: 'Quýt',
      price: -3,
      haGia: true,
    },
    {
      name: 'Lê',
      price: 50,
      haGia: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('Trai Cay', this.traiCay);
  }
}
