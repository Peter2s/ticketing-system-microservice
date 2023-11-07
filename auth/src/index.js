"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var PORT = 3000;
app.listen(PORT, function () {
    console.log("app listening on port " + PORT);
});
