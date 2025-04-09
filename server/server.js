"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(routes_1.default);
const PORT = process.env.PORT || 4000;
mongoose_1.default.connect('mongodb+srv://polamarasettidurgarao00008:7997@cluster0.zfnfuny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: "todo" })
    .then(() => {
    console.log("Db is connected");
})
    .catch((e) => {
    console.log(e.message);
    console.log("DB is failed in connection");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
