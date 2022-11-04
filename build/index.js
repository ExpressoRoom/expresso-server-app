"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./Database/mongo");
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes");
const socketRouter_1 = require("./Sockets/socketRouter");
dotenv_1.default.config();
// db();
const port = process.env.PORT;
const app = (0, express_1.default)();
const server = app.listen(port, () => console.log(`Listening on Port: ${port}`));
const socket = http_1.default.createServer(app);
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use('/', routes_1.router);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
const io = new socket_io_1.Server(socket, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
}).listen(server);
io.on('connection', socketRouter_1.onConnection);
exports.default = io;
