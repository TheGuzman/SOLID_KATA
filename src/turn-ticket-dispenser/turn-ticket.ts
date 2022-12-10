export default class TurnTicket {
    #turnNumber: number;

    constructor(turnNumber: number) {
        this.#turnNumber = turnNumber;
    }

    public getTurnNumber() {
        return this.#turnNumber;
    }
    public createTicket(): Ticket {
        return { ticketNumber: this.#turnNumber };
    }
}

export type Ticket = {
    ticketNumber: number;
};
// interface BaseTicket {
//     getTurnNumber(): number;
// }
