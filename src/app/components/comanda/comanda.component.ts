import { Component, Input } from '@angular/core';
import IProduct from '../../interfaces/iproduct.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'comanda',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './comanda.component.html',
  styleUrl: './comanda.component.css'
})
export class ComandaComponent {

  @Input() productos: IProduct[] = [];

  calcularTotal() {
    return this.productos.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
  }

  calcularTotalV2() {
    let total = 0;
    for (let prod of this.productos) {
      total += prod.precio;
    }
    return total;
  }

  onClickDelete(index: number) {
    this.productos[index].stock++;
    if (this.productos[index].cantidad === 1) {
      this.productos.splice(index, 1);
    } else {
      this.productos[index].cantidad--;
    }
  }

}
