import { Component, EventEmitter, Input, Output } from '@angular/core';
import IProduct from '../../interfaces/iproduct.interface';

@Component({
  selector: 'lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  @Input() titulo: string = '';
  @Input() productos: IProduct[] = [];

  @Output() seleccionaProducto: EventEmitter<IProduct> = new EventEmitter();

  onClick(prodSeleccionado: IProduct) {
    this.seleccionaProducto.emit(prodSeleccionado);
  }

}
