import TicketDispenser from "./legacy/ticker-dispenser";

//BEFORE REFACTOR
describe("Given a single TicketDispenser", () => {
    const dispenser = new TicketDispenser();
    describe("When a user gets a ticket", () => {
        it("it should be one number greater or equal than cero", () => {
            const ticket = dispenser.getTurnTicket();
            //Changed to 0 instead of -1
            expect(ticket.getTurnNumber()).toBeGreaterThanOrEqual(0);
        });
        it("and then another user gets a ticket, it should be one number greater than the previous ticket", () => {
            const prevTicket = dispenser.getTurnTicket().getTurnNumber();
            const secondTicket = dispenser.getTurnTicket().getTurnNumber();
            expect(secondTicket).toEqual(prevTicket + 1);
        });
    });
});

describe("Given more than one TicketDispenser", () => {
    let firstDispenser: TicketDispenser;
    let secondDispenser: TicketDispenser;
    beforeAll(() => {
        firstDispenser = new TicketDispenser();
        secondDispenser = new TicketDispenser();
    });
    describe("When a user gets a ticket from each ticketDispenser", () => {
        it("it should be one number greater or equal than cero and the tickets should not be equal", () => {
            const firstTicket = firstDispenser.getTurnTicket();
            const secondTicket = secondDispenser.getTurnTicket();
            expect(firstTicket.getTurnNumber()).toBeGreaterThanOrEqual(0);
            expect(secondTicket.getTurnNumber()).toBeGreaterThanOrEqual(0);
            expect(firstTicket.getTurnNumber()).not.toEqual(
                secondTicket.getTurnNumber()
            );
        });
        it("and then another user gets a ticket, it should be one number greater than the previous ticket", () => {
            const firstTicket = firstDispenser.getTurnTicket().getTurnNumber();
            const secondTicket = secondDispenser
                .getTurnTicket()
                .getTurnNumber();
            expect(secondTicket).toEqual(firstTicket + 1);
        });
    });
});
