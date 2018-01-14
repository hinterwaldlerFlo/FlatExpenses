export class Balance {
    public Id: AAGUID;
    public StartDate: Date;
    public EndDate: Date;
    public TotalAmount: Number;
    public AveragePartialAmount: Number;
    public Attendees: Array<BalanceAttendee>;
    public BalanceFragments: Array<BalanceFragment>;
}

export class BalanceAttendee {
    public User: string;
    public PartialAmount: number;
    public BalanceFragments: number;
}

export class BalanceFragment {
    public PartialTransferAmount: number;
    public ReceivingUser: string;
    public SendingUser: string;
}
export class BalanceRequest {
    public StartDate = new Date().getUTCDate();
    public EndDate = new Date().getUTCDate();
}
