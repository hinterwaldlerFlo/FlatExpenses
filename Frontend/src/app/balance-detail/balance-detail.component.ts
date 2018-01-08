import { Component, OnInit, Inject } from '@angular/core';
import {MatInputModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-balance-detail',
  template: `
  <div class="balance-detail-popup">
    <h2>Abrechnung</h2>
    <tr>
      <td>Anfangsdatum:</td>
      <td>{{ data.row.StartDate | date: 'dd.MM.yyyy' }}</td>
    </tr>
    <tr>
      <td>Enddatum:</td>
      <td>{{ data.row.EndDate | date: 'dd.MM.yyyy' }}</td>
    </tr>
    <table>
      <ng-container *ngFor="let Attendee of data.row.Attendees">
          <tr>
            <td class="table-cell">{{Attendee.User}}</td>
            <td class="table-cell">{{Attendee.PartialAmount}}</td>
          </tr>
      </ng-container>
    </table>
    <tr>
      <td>Gesamtsumme:</td>
      <td>{{ data.row.TotalAmount }}</td>
    </tr>
  </div>
  `,
  styleUrls: ['./balance-detail.component.css']
})
export class BalanceDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BalanceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
