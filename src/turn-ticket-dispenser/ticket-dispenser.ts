import { BaseSequence } from "./turn-number-sequence";
import TurnTicket, { Ticket } from "./turn-ticket";

export default class TicketDispenser implements BaseDispenser {
    #sequence: BaseSequence;
    constructor(private readonly turnSequence: BaseSequence) {
        this.#sequence = this.turnSequence;
    }
    public getTurnTicket() {
        const newTurnNumber = this.#sequence.getNextTurnNumber();
        const newTurnTicket = new TurnTicket(newTurnNumber);
        return newTurnTicket.createTicket();
    }
}

interface BaseDispenser {
    getTurnTicket(): Ticket;
}
