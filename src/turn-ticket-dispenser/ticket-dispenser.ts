import { BaseNumericSequence } from "./turn-number-sequence";
import TurnTicket, { Ticket } from "./turn-ticket";

export default class TicketDispenser implements BaseDispenser {
    #sequence: BaseNumericSequence;
    constructor(private readonly turnSequence: BaseNumericSequence) {
        this.#sequence = this.turnSequence;
    }
    public getTurnTicket() {
        const newTurnNumber = this.#sequence.getNextTurn();
        const newTurnTicket = new TurnTicket(newTurnNumber);
        return newTurnTicket.createTicket();
    }
}

interface BaseDispenser {
    getTurnTicket(): Ticket;
}
