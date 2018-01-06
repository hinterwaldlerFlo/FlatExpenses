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
  public dataSource: MatTableDataSource<Element>;
  // public invoices:  Element[] = new Array;

  constructor(
    private invoiceApi: InvoiceApiService
  ) {
    // debugger;
  }

  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    // this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    this.invoiceApi.getInvoices().subscribe(data => {
      let invoices = new Array<Element>();
      data.forEach((data_row: Invoice) => {
        invoices.push(<Element>{ date: data_row.Date,
                                      user: data_row.User,
                                      amount: data_row.Amount
                                    });
      });
      this.dataSource = new MatTableDataSource<Element>(invoices);
    });
  }

}

export interface Element {
  date: Date;
  user: string;
  amount: number;
}

const ELEMENT_DATA: Element[] = [
  {date: new Date(), user: 'Hydrogen', amount: 1.0079},
  {date: new Date(), user: 'Helium', amount: 4.0026},
  {date: new Date(), user: 'Lithium', amount: 6.941}
];
