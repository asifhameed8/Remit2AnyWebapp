import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'INRCurrency',
  standalone: true,
})
export class InrcurrencyPipe implements PipeTransform {
  transform(value: number): string | null {
    return (value / 100).toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR',
    });
  }
}
