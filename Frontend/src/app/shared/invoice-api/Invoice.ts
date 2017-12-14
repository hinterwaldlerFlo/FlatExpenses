export class Invoice {
    public id: AAGUID;
    public date: Date;
    public user: string;
    public amount: number;

    constructor(id: AAGUID, date: Date, user: string, amount: number, saveDate: Date){
        this.id = id;
        this.date = date;
        this.user = user;
        this.amount = amount;
    }
}
