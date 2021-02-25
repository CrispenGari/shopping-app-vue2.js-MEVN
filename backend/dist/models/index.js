"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const products = "Products";
const basket = "UserBasket";
const ProductsSchema = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    price: Number,
    img: String,
});
const UserBasket = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    price: Number,
    img: String,
});
const productModel = mongoose_1.default.model(products, ProductsSchema);
const basketModel = mongoose_1.default.model(basket, UserBasket);
const models = {
    productModel,
    basketModel,
};
exports.default = models;
//# sourceMappingURL=index.js.map