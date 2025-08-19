import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import IProduct from './interfaces/iproduct.interface';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ComandaComponent } from './components/comanda/comanda.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaProductosComponent, ComandaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  arrComida: IProduct[];
  arrBebida: IProduct[];

  productosSeleccionados: IProduct[] = [];

  constructor() {
    this.arrComida = [
      { nombre: 'Paella', imagen: 'https://nomen.es/wp-content/uploads/2020/09/trucos-paella-perfecta.jpg', precio: 12.90, stock: 5, cantidad: 0 },
      { nombre: 'Cocido', imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg', precio: 11, stock: 5, cantidad: 0 },
      { nombre: 'Macarrones con tomate', imagen: 'https://www.rebanando.com/uploads/media/maxresdefault-jpg-19.jpeg', precio: 6.50, stock: 5, cantidad: 0 },
      { nombre: 'Cazón', imagen: 'https://lacocinademasito.com/wp-content/uploads/2019/12/Cazon-en-adobo-2.jpg', precio: 7.90, stock: 5, cantidad: 0 },
    ];

    this.arrBebida = [
      { nombre: 'Coca-cola', imagen: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', precio: 2.50, stock: 5, cantidad: 0 },
      { nombre: 'Fanta Naranja', imagen: 'https://fenicia.es/wp-content/uploads/2020/04/fanta-naranja.jpg', precio: 2.23, stock: 5, cantidad: 0 },
      { nombre: 'Cerveza', imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/11/6113832151c5c.jpeg', precio: 1.80, stock: 5, cantidad: 0 },
      { nombre: 'Agua', imagen: 'https://folder.es/41611-large_default/caja-de-35-botellas-de-agua-nestle-aquarel-033l.jpg', precio: 1.20, stock: 5, cantidad: 0 },
    ];
  }

  onSeleccionaProducto(prodSeleccionado: IProduct) {
    if (prodSeleccionado.stock > 0) {
      // console.log('INCLUIDO 2', this.productosSeleccionados.some(prod => prod.nombre === prodSeleccionado.nombre));
      const existe = this.productosSeleccionados.includes(prodSeleccionado);

      if (existe) {
        prodSeleccionado.cantidad++;
      } else {
        prodSeleccionado.cantidad = 1;
        this.productosSeleccionados.push(prodSeleccionado);
      }

      prodSeleccionado.stock--;
    } else {
      Swal.fire({
        title: 'Sin stock',
        text: 'No hay stock para este producto',
        icon: 'warning'
      });
    }
  }

}
