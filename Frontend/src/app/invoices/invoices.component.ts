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
export class InvoicesComponent implements OnInit{

  public displayedColums;
  public dataSource: MatTableDataSource<Invoice>;

  constructor(
    private invoiceApi: InvoiceApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    this.invoiceApi.getInvoices().subscribe(data => {
      this.dataSource = new MatTableDataSource<Invoice>(data);
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(InvoiceAddComponent, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
