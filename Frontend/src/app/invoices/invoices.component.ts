import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit{

  public displayedColums;
  public dataSource: MatTableDataSource<Element>;
  
  // constructor() {
  //   // debugger;
  // }
  
  ngOnInit() {
    this.displayedColums = [ 'date', 'user', 'amount'];
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  }

}

export interface Element {
  date: number;
  user: string;
  amount: number;
}

const ELEMENT_DATA: Element[] = [
  {date: 1, user: 'Hydrogen', amount: 1.0079},
  {date: 2, user: 'Helium', amount: 4.0026},
  {date: 3, user: 'Lithium', amount: 6.941}
];
