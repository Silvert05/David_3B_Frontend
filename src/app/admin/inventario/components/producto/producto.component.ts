import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},
    {id:1, nombre: "teclado", precio:394.96, categoria_id:5, stock:12, estado:"COMPLETO"},


  ];
  cols:any[]=[];


  openNew(){

  }

  editProducto(prod:any){

  }

  deleteProducto(prod:any){

  }

}
