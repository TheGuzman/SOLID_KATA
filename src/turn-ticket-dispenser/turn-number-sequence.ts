export interface UniqueNextTurnNumber {
    getNextTurnNumber(): number;
    getCurrentTurnNumber(): number;
}

export class BaseSequence implements UniqueNextTurnNumber {
    #turnNumber: number;
    constructor() {
        this.#turnNumber = 0;
    }

    public getNextTurnNumber(): number {
        return this.#turnNumber++;
    }
    public getCurrentTurnNumber(): number {
        return this.#turnNumber;
    }
}

export default class TurnNumberSequence extends BaseSequence {
    #turnNumber: number;

    constructor() {
        super();
        this.#turnNumber = this.getCurrentTurnNumber();
    }

    public getNextTurnNumber(): number {
        return this.#turnNumber++;
    }
}
