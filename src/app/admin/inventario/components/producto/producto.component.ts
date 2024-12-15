import { ProductoService } from './../../services/producto.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent{ 
private productoService= inject(ProductoService) 

  categorias:any =[
    {name:'Ropa Dama ', code:'RD'},
    {name:'Ropa Caballero', code:'RC'},
    {name:'Herramientas', code:'He'},
    {name:'Tecnologia', code:'Tec'},
    {name:'Hogar', code:'Hgr'},
  ];

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

  constructor(){
    this.productoService.funListar2().subscribe( 
      (res:any)=>{
        this.products=res.data
      }
    )
  }


  openNew(){

  }

  editProducto(prod:any){

  }

  deleteProducto(prod:any){

  }

}
