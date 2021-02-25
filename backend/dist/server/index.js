"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("../models"));
const url_1 = __importDefault(require("../url"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
// Midleways
app.use(cors_1.default());
app.use(express_1.default.json());
class Server {
    constructor() {
        this.app = app;
        this.models = models_1.default;
        this.dbUrl = url_1.default;
    }
}
const server = new Server();
exports.default = server;
//# sourceMappingURL=index.js.map