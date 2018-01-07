import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {MatDialog } from '@angular/material';

import { InvoiceApiService } from '../shared/invoice-api/invoice-api.service';
import { Invoice } from '../shared/invoice-api/invoice.model';

import { InvoiceAddComponent } from '../invoice-add/invoice-add.component';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  public displayedColums;
  public invoicesList: MatTableDataSource<Invoice>;

  constructor(
    private invoiceApi: InvoiceApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    this.loadInvoiceData();
  }

  addInvoiceDialog(): void {
    let dialogRef = this.dialog.open(InvoiceAddComponent, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadInvoiceData();
      console.log('The dialog was closed');
    });
  }

  private loadInvoiceData(): void {
    this.invoiceApi.getInvoices().subscribe(data => {
      this.invoicesList = new MatTableDataSource<Invoice>(data);
    });
  }
}
