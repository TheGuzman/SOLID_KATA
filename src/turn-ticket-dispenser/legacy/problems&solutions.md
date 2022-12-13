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
    1.2 No se puede inicializar/setear la sequencia a un número específico.
    1.3 No se puede mockear la sequencia
    1.4 Si se cambiara el modelo de datos y el ticket fuera ahora un string no se podría implementar

2. SOLUCIONES

    2.1 crear interface UniqueTurn que tenga dos métodos ( getNextTurn(): T y getCurrentTurn(): T)
    2.2 crear clase BaseNumericSequence que implemente UniqueTurn
    2.3 crear instancia de BaseNumericSequence que acepte un number y pasarsela a la clase de ticket dispenser
