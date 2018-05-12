import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  ledger = [];
  transId = 1;
  shinto = {
  shintoValue: 1,
  shintoBalance: 0
  };

  shareShinto(){
    return this.shinto;
  }
  shareLedger(){
    return this.ledger;
  }
  shareTransaction(id: number){
    let transaction: number;
    this.ledger.forEach(x=>{
      if(x.transId == id) transaction = x;
    })
    return transaction;
  }
  updateShinto(shintoVal, action, amount){
    if(action =="Bought"){
      this.ledger.push({
        transId: this.transId,
        action: action,
        amount: amount,
        value: shintoVal,
      });
      this.transId++;
      this.shinto.shintoValue +=1;
      this.shinto.shintoBalance += amount;
    }
    if(action =="Sold"){
      this.ledger.push({
        transId: this.transId,
        action: action,
        amount: amount,
        value: shintoVal,
      });
      this.transId++;
      this.shinto.shintoValue -=1;
      this.shinto.shintoBalance -= amount;
    }
    if(action =="Mined"){
      this.ledger.push({
        transId: this.transId,
        action: action,
        amount: amount,
        value: shintoVal,
      });
      this.transId++;
      this.shinto.shintoValue +=1;
      this.shinto.shintoBalance += amount;
    }
  }
}
