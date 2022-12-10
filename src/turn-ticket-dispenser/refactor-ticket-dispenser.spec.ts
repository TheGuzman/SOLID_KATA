import TicketDispenser from "../turn-ticket-dispenser/ticket-dispenser";
import TurnNumberSequence from "../turn-ticket-dispenser/turn-number-sequence";

describe("Given a single ticket Dispenser", () => {
    describe("When a user gets a ticket", () => {
        let turnSequence: TurnNumberSequence;
        let dispenser: TicketDispenser;
        beforeEach(() => {
            turnSequence = new TurnNumberSequence();
            dispenser = new TicketDispenser(turnSequence);
        });
        it("it should be one number greater or equal than cero", () => {
            const ticket = dispenser.getTurnTicket();
            expect(ticket.ticketNumber).toBe(0);
        });
        it("and then another user gets a ticket, it should be one number greater than the previous ticket", () => {
            const prevTicket = dispenser.getTurnTicket();
            const secondTicket = dispenser.getTurnTicket();
            expect(secondTicket.ticketNumber).toEqual(
                prevTicket.ticketNumber + 1
            );
        });
    });
});
describe("Given a multiple ticket Dispensers", () => {
    describe("When a user gets a ticket", () => {
        let turnSequence: TurnNumberSequence;
        let firstDispenser: TicketDispenser;
        let secondDispenser: TicketDispenser;
        beforeEach(() => {
            turnSequence = new TurnNumberSequence();
            firstDispenser = new TicketDispenser(turnSequence);
            secondDispenser = new TicketDispenser(turnSequence);
        });
        it("it should be one number greater or equal than cero", () => {
            const ticket = firstDispenser.getTurnTicket();
            expect(ticket.ticketNumber).toBe(0);
        });
        it("and then another user gets a ticket from another dispenser, it should be one number greater than the previous ticket", () => {
            const prevTicket = firstDispenser.getTurnTicket();
            const secondTicket = secondDispenser.getTurnTicket();
            expect(secondTicket.ticketNumber).toEqual(
                prevTicket.ticketNumber + 1
            );
        });
    });
});
