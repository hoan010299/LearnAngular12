import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hoan Nguyen';
  public age = 20;
  public districts: any[] = ['Quận / Huyện'];
  public vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận / Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('Cities', this.vietnamData);
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
    //cach 1 :
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    //cach 2 :
    this.districts =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}
