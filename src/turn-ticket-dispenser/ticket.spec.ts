import TicketDispenser from "./legacy/ticker-dispenser";

//BEFORE REFACTOR
describe("Given a single TicketDispenser", () => {
    describe("When a user gets a ticket", () => {
        it("it should be one number greater or equal than cero", () => {
            const dispenser = new TicketDispenser();
            const ticket = dispenser.getTurnTicket();
            //Changed to 0 instead of -1
            expect(ticket.getTurnNumber()).toBe(0);
        });
        it("and then another user gets a ticket, it should be one number greater than the previous ticket", () => {
            const dispenser = new TicketDispenser();
            const prevTicket = dispenser.getTurnTicket().getTurnNumber();
            const secondTicket = dispenser.getTurnTicket().getTurnNumber();
            expect(secondTicket).toEqual(prevTicket + 1);
        });
    });
});
