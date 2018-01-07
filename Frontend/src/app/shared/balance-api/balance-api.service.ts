import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Balance } from './balance.model';

@Injectable()
export class BalanceApiService {

  private baseUrl = '/api/Balances';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getBalances(): Observable<Balance[]> {
    return this.httpClient.get<Balance[]>(this.baseUrl);
  }

  setBalance(newInvoice): void {
    this.httpClient.post(this.baseUrl, newInvoice)
      .subscribe();
              // .map(res => {
              //   console.error(res);
              //   // return new Invoice("5", null, null, null);
              // });
  }
}
