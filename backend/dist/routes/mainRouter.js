"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth.route"));
const admin_route_1 = __importDefault(require("./admin.route"));
const search_route_1 = __importDefault(require("./search.route"));
const product_route_1 = __importDefault(require("./product.route"));
const cart_route_1 = __importDefault(require("./cart.route"));
const address_route_1 = __importDefault(require("./address.route"));
const order_route_1 = __importDefault(require("./order.route"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const mainRouter = (0, express_1.Router)();
mainRouter.use("/auth", auth_route_1.default);
mainRouter.use("/admin", auth_middleware_1.verifyToken, admin_route_1.default);
mainRouter.use("/search", search_route_1.default);
mainRouter.use("/product", product_route_1.default);
mainRouter.use("/cart", cart_route_1.default);
mainRouter.use("/address", address_route_1.default);
mainRouter.use("/order", order_route_1.default);
exports.default = mainRouter;