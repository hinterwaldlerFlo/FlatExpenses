import { Component, OnInit } from '@angular/core';
import {MatInputModule, MatDialogRef} from '@angular/material';

import { BalanceApiService } from '../shared/balance-api/balance-api.service';
import { BalanceRequest } from '../shared/balance-api/balance.model';

@Component({
  selector: 'app-balance-calculate',
  template: `
    <form class="input-balance-form">

    <mat-form-field>
      <input matInput [(ngModel)]="balanceTimeRange.StartDate" name="StartDate"
            [matDatepicker]="startDatePicker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="startDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #startDatePicker startView="month"></mat-datepicker>
    </mat-form-field>

    <mat-form-field>
      <input matInput [(ngModel)]="balanceTimeRange.EndDate" name="EndDate" [matDatepicker]="endDatePicker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="endDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #endDatePicker startView="month"></mat-datepicker>
    </mat-form-field>

    <mat-form-field class="input-field">
      <textarea matInput placeholder="Leave a comment - NOT IMPLEMENTED"></textarea>
    </mat-form-field>

    <!-- The buttons -->
    <button mat-button class="input-balance-buttons" (click)="onAbortClick()" type="reset" color="primary">
      Abort
    </button>

    <button mat-raised-button class="input-balance-buttons" (click)="processInput()" type="submit" color="primary" style="float: right;">
      Accept
    </button>

  </form>
  `,
  styleUrls: ['./balance-calculate.component.css']
})
export class BalanceCalculateComponent implements OnInit {

  public dateNow = new Date().getUTCDate();

  public balanceTimeRange = new BalanceRequest();

  constructor(
    private balanceApi: BalanceApiService,
    public dialogRef: MatDialogRef<BalanceCalculateComponent>
  ) { }

  ngOnInit() {
  }

  processInput() {
    this.balanceApi.setBalance(this.balanceTimeRange);
    this.dialogRef.close();
  }

  onAbortClick(): void {
    this.dialogRef.close();
  }
}
