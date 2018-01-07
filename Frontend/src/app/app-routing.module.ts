import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { BalanceCalculateComponent } from './balance-calculate/balance-calculate.component';

const routes: Routes = [
  {path: 'invoices', component: InvoicesComponent},
  {path: 'addinvoice', component: InvoiceAddComponent},
  {path: 'calculatebalance', component: BalanceCalculateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
