import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  title="Buy Shinto Coins"
  constructor(private _httpService: HttpService) { }
  shinto: any;
  buy: number;
  answer: number;
  ngOnInit() {
    this.getShinto();

  }
  getShinto(){
    this.shinto = this._httpService.shareShinto();
    console.log(this.shinto)
  }
  BuyShinto(){
    if(this.buy){
      var action = "Bought"
      this.updateShinto(this.shinto.shintoValue, action, this.buy);
      this.buy = null;
      this.getShinto()
    }
  }
  updateShinto(shintoVal, action, buy){
    console.log("UPDATE", shintoVal);
    this._httpService.updateShinto(shintoVal, action, buy);
  }
}
