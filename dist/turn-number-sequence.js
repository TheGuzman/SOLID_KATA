"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnNumberSequence {
    constructor() {
        this.turnNumber = 0;
    }
    getNextTurnNumber() {
        return this.turnNumber++;
    }
}
exports.default = TurnNumberSequence;
