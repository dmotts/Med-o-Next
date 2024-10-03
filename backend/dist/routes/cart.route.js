"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const cartRouter = (0, express_1.Router)();
cartRouter.post("/", auth_middleware_1.verifyToken, cart_controller_1.addToCart);
cartRouter.get("/", auth_middleware_1.verifyToken, cart_controller_1.getCartItems);
cartRouter.put("/increase-item", auth_middleware_1.verifyToken, cart_controller_1.increaseItemQuantity);
cartRouter.put("/decrease-item", auth_middleware_1.verifyToken, cart_controller_1.decreaseItemQuantity);
cartRouter.delete("/remove-item/:productId", auth_middleware_1.verifyToken, cart_controller_1.removeItemFromCart);
exports.default = cartRouter;