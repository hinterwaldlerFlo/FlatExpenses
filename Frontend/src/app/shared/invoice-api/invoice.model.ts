export class Invoice {
    public Id: AAGUID;
    public Date: Date;
    public User: string;
    public Amount: number;

    constructor(id: AAGUID, date: Date, user: string, amount: number){
        this.Id = id;
        this.Date = date;
        this.User = user;
        this.Amount = amount;
    }
}

