import { Component, OnInit, Inject } from '@angular/core';
import {MatInputModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-balance-detail',
  templateUrl: `balance-detail.component.html`,
  styleUrls: ['./balance-detail.component.css']
})
export class BalanceDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BalanceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
