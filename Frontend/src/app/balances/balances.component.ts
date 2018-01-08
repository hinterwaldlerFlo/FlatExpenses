import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatDialog } from '@angular/material';

import { BalanceApiService } from '../shared/balance-api/balance-api.service';
import { Balance } from '../shared/balance-api/balance.model';
import { BalanceCalculateComponent } from '../balance-calculate/balance-calculate.component';
import { BalanceDetailComponent } from '../balance-detail/balance-detail.component';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  public displayedColums;
  public balancesList: MatTableDataSource<Balance>;

  constructor(
    private balanceApi: BalanceApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.displayedColums = [ 'startDate', 'endDate', 'totalAmount'];
    this.loadBalancesList();
  }

  calculateBalanceDialog() {
    let dialogRef = this.dialog.open(BalanceCalculateComponent, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadBalancesList();
    });
  }

  loadBalancesList() {
    this.balanceApi.getBalances()
      .subscribe(data => {
        this.balancesList = new MatTableDataSource<Balance>(data);
      });
  }

  onRowClick(row: any) {
    let dialogRef = this.dialog.open(BalanceDetailComponent, {
      data: { row }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
