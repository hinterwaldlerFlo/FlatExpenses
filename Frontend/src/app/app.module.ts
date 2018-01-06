import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceApiService } from './shared/invoice-api/invoice-api.service';

import { MatTableModule } from '@angular/material/table';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    NgbModule.forRoot(),
  ],
  exports: [
  ],
  providers: [InvoiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
