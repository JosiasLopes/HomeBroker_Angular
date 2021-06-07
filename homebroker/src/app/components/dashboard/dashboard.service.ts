import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Stock from "src/app/model/stock.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient){}

  readonly baseUrl ="https://bootcamp-dio-santander-josias.herokuapp.com";
  //um metodo async retorna uma promise generica
  //para utilizarmos async precisamos usar await tambem
  //no caso o metodo get da classe HttpClient precisa do tipo
  //de  objeto que será buscado retornando um observable que deve ser tratado com subscribe
  //mas nesse caso convertemos o retorno para promisse para bater com o tipo de retorno
  //sintaxe da interpolação de string `${string}` use isso ao inves de concatenar
  async getStocks():Promise<Stock[]>{

    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}


