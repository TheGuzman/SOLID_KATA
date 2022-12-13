export default class TurnTicket implements BaseTicket {
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
export interface BaseTicket {
    getTurnNumber(): number;
    createTicket(): Ticket;
}
