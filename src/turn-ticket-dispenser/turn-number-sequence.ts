export interface UniqueTurn<T> {
    getNextTurn(): T;
    getCurrentTurn(): T;
}

export class BaseNumericSequence implements UniqueTurn<number> {
    #turn: number;
    constructor(startTurn: number) {
        this.#turn = startTurn;
    }
    getCurrentTurn(): number {
        return this.getCurrentTurnNumber();
    }
    getNextTurn(): number {
        return this.getNextTurnNumber();
    }
    private getNextTurnNumber(): number {
        return this.#turn++;
    }
    private getCurrentTurnNumber(): number {
        return this.#turn;
    }
}

export default class TurnNumberSequence extends BaseNumericSequence {
    #turnNumber: number;

    constructor(startNumber: number) {
        super(startNumber);
        this.#turnNumber = this.getCurrentTurn();
    }

    public getNextTurn(): number {
        return this.#turnNumber++;
    }
}
