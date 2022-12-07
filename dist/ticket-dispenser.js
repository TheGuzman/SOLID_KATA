"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turn_ticket_1 = __importDefault(require("./turn-ticket"));
class TicketDispenser {
    constructor(turnSequence) {
        this.turnSequence = turnSequence;
        this.turnSequence = this.sequence;
    }
    getTurnTicket() {
        const newTurnNumber = this.turnSequence.getNextTurnNumber();
        const newTurnTicket = new turn_ticket_1.default(newTurnNumber);
        return newTurnTicket;
    }
}
exports.default = TicketDispenser;
