import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';

import { Invoice } from './Invoice';

@Injectable()
export class InvoiceApiService {

  private baseUrl = 'http://localhost/api/Invoices';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    // let invoices: BehaviorSubject<Invoice[]>;
    return this.httpClient.get<Invoice[]>(this.baseUrl);
      // .toPromise().then(response => console.error(response))
      // .subscribe(response => {
      //   console.error(response);
      // });
      // .map((response: Invoice[]) => {
      //   console.error(response);
      //   response.forEach(element => {
      //     return element;
      //   });
      // .catch((error: any) => {
      //   console.error(error);
      //   return new BehaviorSubject<Invoice[]>(new Array<Invoice>());
      // });
    // return invoices;
  }
}
