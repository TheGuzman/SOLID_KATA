DEF:
write the unit tests for the TicketDispenser. The TicketDispenser class is designed to be used to manage a queuing system in a shop. There may be more than one ticket dispenser but the same ticket should not be issued to two different customers

Tenéis el código base en la siguiente URL:

https://github.com/emilybache/Racing-Car-Katas/tree/main/TypeScript/turn-ticket-dispenser

Ejemplo de test para ticket:

`it('foo', () => {
const dispenser = new TicketDispenser();
const ticket = dispenser.getTurnTicket();
expect(ticket.getTurnNumber()).toBe(-1);
});`

1. PROBLEMAS

    1.1 instancia de turn number sequence es una implementación de la clase y no una abstracción

2. SOLUCIONES

    2.1 crear abstracción de turn sequence y pasarsela a la clase de ticket dispenser
