import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path: "Home", component: HomeComponent},
  {path: "Mine", component: MineComponent},
  {path: "Buy", component: BuyComponent},
  {path: "Sell", component: SellComponent},
  {path: "Ledger", component: LedgerComponent},
  {path: "Transaction/:id", component: TransactionComponent},
  {path: "", pathMatch: "full", redirectTo: "/Home"},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
