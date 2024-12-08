import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaService } from './../../services/categoria.service';
import { Component, inject, OnInit } from '@angular/core';

interface Categoria {
  id?: number,
  nombre: string,
  detalle?:string
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService)

  categorias:Categoria[]=[]
  dialog_visible:boolean=false;
  categoriaForm=new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl('')
  });

  ngOnInit(): void {
    this.getCategorias()

  }
  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  mostrarDialog(){
    this.dialog_visible=true

  }
  guardarCategoria(){

    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
      },
      (error:any)=>{
        console.log(error);
      }
    )


  }
}
