import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/model/stock.model';

@Component({
  selector: 'app-stockCard',
  templateUrl: './stockCard.component.html',
  styleUrls: ['./stockCard.component.css']
})
export class StockCardComponent implements OnInit
 {
  texto = 'Hello World';

  //vamos usar esse stock para o input dentro dos cards
  //a injection INput() permite passar atributos entre components e acessalos tambem
  //no html de outrocomponente
  @Input()
  stock = new Stock();
  constructor(){}

  ngOnInit(): void{}

  get variation():string{
    const localizedVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ?'+':'-';
    return `${prefix} ${localizedVariationString.replace('-','')}%`;
  }
}
