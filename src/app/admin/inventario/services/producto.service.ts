import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = environment.urlServidor
  private http=inject(HttpClient)

  funListar2(){
    return this.http.get(`${this.baseUrl}/producto/back`)
  }

  constructor() { }
}
