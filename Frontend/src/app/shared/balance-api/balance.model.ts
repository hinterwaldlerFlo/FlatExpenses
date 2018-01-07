export class Balance {
    public Id: AAGUID;
    public StartDate: Date;
    public EndDate: Date;
    public TotalAmount: Number;
    public Attendees: Array<BalanceAttendee>;
}

export class BalanceAttendee {
    public User: string;
    public PartialAmount: number;
}
