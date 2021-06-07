import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/model/stock.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardComponent implements OnInit
 {
  texto = 'Hello World';
  //é o service que faz a conexao com a api
  //o componente chama o service e o service faz a conexao com a api
  stocks:Array<Stock> = [];
  //poderia ser tambem stocks:Stock[] = [];

  constructor(private service:DashboardService){}

  //o oninit é executado a primeira vez que o componente é renderizado nan tela
  ngOnInit(): void{
    this.fechtStocks();
  }

  async fechtStocks():Promise<void>{
    //o vetor aguarda a resposta do retorna de getstocks
    this.stocks = await this.service.getStocks();
  }
}
