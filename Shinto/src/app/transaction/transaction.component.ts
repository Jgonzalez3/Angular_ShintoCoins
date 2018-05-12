import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  title="Ledger Transaction Details"
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }
  transaction: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      this.transaction = this._httpService.shareTransaction(params['id'])
    })
  }
}
