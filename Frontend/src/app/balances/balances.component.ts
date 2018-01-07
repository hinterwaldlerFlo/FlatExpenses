import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatDialog } from '@angular/material';

import { BalanceApiService } from '../shared/balance-api/balance-api.service';
import { Balance } from '../shared/balance-api/balance.model';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  public displayedColums;
  public balancesList: MatTableDataSource<Balance>;

  constructor(
    private balanceApi: BalanceApiService
  ) { }

  ngOnInit() {
    this.displayedColums = [ 'startDate', 'endDate', 'totalAmount'];
    this.balanceApi.getBalances()
      .subscribe(data => {
        this.balancesList = new MatTableDataSource<Balance>(data);
      });
  }

  calculateBalanceDialog() {
    console.error('not implemented');
  }

}
