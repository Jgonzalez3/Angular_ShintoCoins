import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  title="Sell ShintoCoins"
  constructor(private _httpService: HttpService) { }
  sell: number;
  shinto: any;
  answer: number;
  ngOnInit() {
    this.getShinto()
  }
  getShinto(){
    this.shinto = this._httpService.shareShinto();
    console.log(this.shinto)
  }
  sellShinto(){
    if(this.sell && this.shinto.shintoBalance > 0){
      var action = "Sold";
      this.updateShinto(this.shinto.shintoValue, action, this.sell);
      console.log("SOld", this.sell)
      this.sell = null;
      this.getShinto();
    }
  }
  updateShinto(shintoVal, action, sell){
    console.log("UPDATE", shintoVal);
    this._httpService.updateShinto(shintoVal, action, sell);
  }

}
