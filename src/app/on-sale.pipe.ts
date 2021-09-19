import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    // console.log('My pipe', value);
    if (value) {
      return 'Đang hạ giá!';
    }
    return '';
  }
}
