"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const mongoose_1 = __importDefault(require("mongoose"));
const host = "localhost" || "127.0.0.1";
const port = 3001 || process.env.PORT;
const { productModel, basketModel } = server_1.default.models;
// Database Connection
mongoose_1.default
    .connect(server_1.default.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log("CONNECTED TO CLOUD MONGODB"))
    .catch((error) => console.log(error));
mongoose_1.default.connection.once("open", () => {
    console.log("MongDB has been LINKED with localhost:" + port);
});
//  App Routes
server_1.default.app.get("/", (req, res) => {
    return res.status(200).redirect("/products");
});
server_1.default.app.get("/products", (req, res) => {
    productModel.find({}, (err, model) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(model);
        }
    });
});
server_1.default.app.post("/products/new", (req, res) => {
    const data = req.body;
    productModel.create(data, (error, data) => {
        if (!error) {
            res.status(201).send(data);
        }
        else {
            res.status(500).send(error);
        }
    });
});
server_1.default.app.get("/basket", (req, res) => {
    basketModel.find({}, (err, model) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(model);
        }
    });
});
server_1.default.app.post("/basket/add", (req, res) => {
    const basketData = req.body;
    basketModel.create(basketData, (error, data) => {
        if (!error) {
            res.status(201).send(data);
        }
        else {
            res.status(500).send(error);
        }
    });
});
server_1.default.app.delete("/basket/remove/:itemId", (req, res) => {
    const { itemId } = req.params;
    basketModel
        .deleteOne({ _id: itemId })
        .then(() => {
        console.log("Success");
    })
        .catch((err) => {
        console.log("Error");
    });
});
server_1.default.app.delete("/basket/remove/all", (req, res) => {
    basketModel
        .deleteMany({})
        .then(() => {
        console.log("deleted");
    })
        .catch((eror) => {
        console.log("Error oocures");
    });
});
server_1.default.app.listen(port, host, () => {
    console.log(`The server is running on port: ${port}`);
    console.log(`Visit: http://${host}:${port}/`);
});
//# sourceMappingURL=app.js.map