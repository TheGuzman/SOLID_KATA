import TicketDispenser from "./legacy/ticker-dispenser";

it("foo", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTurnNumber()).toBe(-1);
});
