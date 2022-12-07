import TurnNumberSequence from "./turn-number-sequence";
import TurnTicket from "./turn-ticket";

export default class TicketDispenser {
    #sequence: TurnNumberSequence;
    constructor(private readonly turnSequence: TurnNumberSequence) {
        this.#sequence = this.turnSequence;
    }
    public getTurnTicket() {
        const newTurnNumber = this.#sequence.getNextTurnNumber();
        const newTurnTicket = new TurnTicket(newTurnNumber);

        return newTurnTicket;
    }
}
