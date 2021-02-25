"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../keys"));
const dbName = "Products";
const dbUrl = `mongodb+srv://crispen:${keys_1.default}@cluster0.p9olk.mongodb.net/${dbName}?retryWrites=true&w=majority`;
exports.default = dbUrl;
//# sourceMappingURL=index.js.map