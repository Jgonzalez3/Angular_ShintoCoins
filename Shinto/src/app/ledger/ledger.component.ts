import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  title="Browse the Ledger"
  constructor(private _httpService: HttpService) { }
  ledger: any;
  ngOnInit() {
    this.getLedger();
  }
  getLedger(){
    this.ledger = this._httpService.shareLedger();
    console.log(this.ledger);
  }

}
