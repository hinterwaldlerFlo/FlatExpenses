import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { InvoiceApiService } from '../shared/invoice-api/invoice-api.service';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit{

  public displayedColums;
  public dataSource: MatTableDataSource<Element>;
  public invoices:  Element[] = new Array;

  constructor(
    private invoiceApi: InvoiceApiService
  ) {
    // debugger;
  }

  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    this.dataSource = new MatTableDataSource<Element>(this.invoices);
    this.invoiceApi.getInvoices().subscribe(data => {
      console.error(data);
      data.forEach(data_row => {
        this.invoices.push(<Element>{ date: data_row.date,
                                      user: data_row.user,
                                      amount: data_row.amount
                                    });
      });
    });
  }

}

export interface Element {
  date: Date;
  user: string;
  amount: number;
}

const ELEMENT_DATA: Element[] = [
  // {date: 1, user: 'Hydrogen', amount: 1.0079},
  // {date: 2, user: 'Helium', amount: 4.0026},
  // {date: 3, user: 'Lithium', amount: 6.941}
];
