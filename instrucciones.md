# Caja Registradora

## Instalación Bootstrap

1. npm install bootstrap
2. Incluir la ruta de bootstrap dentro de los estilos en `angular.json` (línea 29)

## Creación del interface (producto.interface.ts)

```
ng generate interface interfaces/IProducto interface
```

- nombre, precio, imagen, stock

## Componente ListaProductos

```html
<!-- app.component.html -->
<lista-productos titulo="COMIDA" [productos]="arrComida"></lista-productos>
<lista-productos titulo="BEBIDA" [productos]="arrBebida"></lista-productos>
```

```js
// app.component.ts
arrComida: IProducto[] = [{},{},{}];
arrBebida: IProducto[] = [{}, {}, {}];
```

1. Crear componente
2. Cambiar el selector
3. Crear @Input - titulo y productos
4. Maquetar el componente

## RETO #2

1. (lista-productos) Debemos poder hacer `click` en el producto
2. (lista-productos) En el método que captura el click quiero visualizar el producto pulsado
3. (lista-productos) Emitimos hacia el padre el producto pulsado
4. (app-component) Capturar el producto pulsado en el padre
5. (app-component) Dentro del array `productosSeleccionados`(no lo tenemos) guardamos el producto pulsado

# Componente Comanda

1. Crear el componente

```html
<comanda [productos]="productosSeleccionados"></comanda>
```

2. Modificar el selector
3. Crear un @Input - productos
4. A partir de esa propiedad maquetar el componente

## Borrado de productos

1. Mostrar un boton por cada uno de los productos de la comanda
2. Cuando pulse el botón, eliminamos del array el producto seleccionado

## Stock

PREVIO:
- Mostrar el stock para cada uno de los productos

1. Antes de agregar al array de productos seleccionados, comprobamos si hay stock de ese producto
    - Si hay stock, agregamos y modificamos el stock
    - Si no hay stock, mostramos una alerta

## Productos repetidos

- En el constructor de AppComponente, agregar la propiedad cantidad a cada producto (valor 0)
- A la hora de agregar el producto al array productosSeleccionados comprobar si ya se encuentra agregado (a partir del nombre)
    - Si ya está agregado, aumentamos la cantidad
    - Si no está agregado, lo agregamos con la cantidad a 1
- En la comanda hay que mostrar para cada producto la cantidad
- En el cálculo del total hay que tener en cuenta la cantidad de cada producto
- Tener en cuenta la cantidad a la hora de borrar de la comanda