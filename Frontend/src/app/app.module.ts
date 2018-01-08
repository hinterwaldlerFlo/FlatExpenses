import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceApiService } from './shared/invoice-api/invoice-api.service';

import {  MatTableModule,
          MatInputModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatButtonModule,
          MatDialogModule,
          MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { BalancesComponent } from './balances/balances.component';
import { BalanceApiService } from './shared/balance-api/balance-api.service';
import { BalanceCalculateComponent } from './balance-calculate/balance-calculate.component';
import { BalanceDetailComponent } from './balance-detail/balance-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoiceAddComponent,
    BalancesComponent,
    BalanceCalculateComponent,
    BalanceDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  exports: [
  ],
  entryComponents: [
    BalanceDetailComponent
  ],
  providers: [
    InvoiceApiService,
    BalanceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
