"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = void 0;
var react_1 = __importDefault(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
var wrapRootElement = function (_a) {
    var element = _a.element;
    return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, null, element));
};
exports.wrapRootElement = wrapRootElement;
