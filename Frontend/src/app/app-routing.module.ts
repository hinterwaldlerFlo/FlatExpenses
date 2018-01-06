import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';

const routes: Routes = [
  {path: 'invoices', component: InvoicesComponent},
  {path: 'addinvoice', component: InvoiceAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
