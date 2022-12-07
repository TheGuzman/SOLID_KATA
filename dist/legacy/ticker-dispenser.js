"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turn_number_sequence_1 = __importDefault(require("./turn-number-sequence"));
const turn_ticket_1 = __importDefault(require("./turn-ticket"));
class TicketDispenser {
    getTurnTicket() {
        const newTurnNumber = turn_number_sequence_1.default.getNextTurnNumber();
        const newTurnTicket = new turn_ticket_1.default(newTurnNumber);
        return newTurnTicket;
    }
}
exports.default = TicketDispenser;
