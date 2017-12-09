import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {path: 'invoices', component: InvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
