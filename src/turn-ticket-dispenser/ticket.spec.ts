import TicketDispenser from "./legacy/ticker-dispenser";

it("foo", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    //Changed to 0 instead of -1
    expect(ticket.getTurnNumber()).toBe(0);
});
