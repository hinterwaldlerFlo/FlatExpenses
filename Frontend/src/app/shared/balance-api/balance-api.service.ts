import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { Balance, BalanceRequest } from './balance.model';

@Injectable()
export class BalanceApiService {

  private baseUrl = '/api/Balances';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getBalances(): Observable<Balance[]> {
    return this.httpClient.get<Balance[]>(this.baseUrl);
  }

  setBalance(balanceTimeRange: BalanceRequest): void {
    this.httpClient.put(this.baseUrl, balanceTimeRange)
      .subscribe();
  }
}
