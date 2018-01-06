import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { InvoiceApiService } from '../shared/invoice-api/invoice-api.service';
import { Invoice } from '../shared/invoice-api/invoice.model';

@Component({
  selector: 'app-invoice-add',
  template: `
  <form class="input-invoice-form">

    <mat-form-field>
      <input matInput [(ngModel)]="newInvoice.Date" name="Date" [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker startView="month"></mat-datepicker>
    </mat-form-field>

    <mat-form-field class="example-full-width">
      <input matInput [(ngModel)]="newInvoice.User" name="User"  placeholder="User">
    </mat-form-field>

    <mat-form-field class="example-full-width">
      <input matInput [(ngModel)]="newInvoice.Amount" name="Amount" placeholder="Amount">
    </mat-form-field>

    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Leave a comment - NOT IMPLEMENTED"></textarea>
    </mat-form-field>

    <button mat-button (click)="processInput()" color="primary">Accept</button>

  </form>
  `,
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  public dateNow = new Date().getUTCDate();

  public newInvoice: Invoice;

  constructor(
    private invoiceApi: InvoiceApiService
  ) {
    this.newInvoice = new Invoice('', new Date(), '', 0);
   }

  ngOnInit() {
  }

  processInput() {
    console.error(this.newInvoice);
    this.invoiceApi.setInvoice(this.newInvoice);
  }
}
