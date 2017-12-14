import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InvoicesComponent } from './invoices/invoices.component';
import { MatTableModule } from '@angular/material/table';
import { InvoiceApiService } from './shared/invoice-api/invoice-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
  ],
  providers: [InvoiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
