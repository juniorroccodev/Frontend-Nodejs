import { environment } from './../../../../environments/environment';
import { Resultado } from './resultado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  ApiUrl= environment.ApiUrl;
  
  constructor(private http: HttpClient) { }

  findAll():Observable<Resultado[]> {
    const url = `${this.ApiUrl}`
    return this.http.get<Resultado[]>(url)
  }

 create(resultado: Resultado): Observable<Resultado>{
  
   return this.http.post<any>(this.ApiUrl, resultado)
   
 }
}
