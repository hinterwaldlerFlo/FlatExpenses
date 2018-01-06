import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { InvoiceApiService } from '../shared/invoice-api/invoice-api.service';
import { Invoice } from '../shared/invoice-api/invoice.model';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit{

  public displayedColums;
  public dataSource: MatTableDataSource<Invoice>;

  constructor(
    private invoiceApi: InvoiceApiService
  ) { }

  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    this.invoiceApi.getInvoices().subscribe(data => {
      this.dataSource = new MatTableDataSource<Invoice>(data);
    });
  }

}
